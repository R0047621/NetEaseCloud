/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Howl, Howler } from 'howler';
import { getTrackDetail, getMP3 } from '../../request';

export default class {
  constructor() {
    // 播放器状态
    this._playing = false; // 是否正在播放中
    this._progress = 0; // 当前播放歌曲的进度
    this._duration = 0; // 当前歌曲的总时长
    this._enabled = false; // 是否启用Player
    this._repeatMode = 'off'; // off | on | one
    this._shuffle = false; // true | false
    this._volume = 1; // 0 to 1
    this._volumeBeforeMuted = 1; // 用于保存静音前的音量

    // 播放信息
    this._list = []; // 播放列表 存放trackIds
    this._current = 0; // 当前播放歌曲在播放列表里的索引 index
    this._shuffledList = []; // 被随机打乱的播放列表，随机播放模式下会使用此播放列表
    this._shuffledCurrent = 0; // 当前播放歌曲在随机列表里面的index
    this._playlistSource = { type: 'album', id: 123 }; // 当前播放列表的信息
    this._currentTrack = { id: 86827685 }; // 当前播放歌曲的id
    this._playNextList = []; // 当这个list不为空时，会优先播放这个list的歌
    this._isPersonalFM = false; // 是否是私人FM模式
    this._personalFMTrack = { id: 0 }; // 私人FM当前歌曲
    this._personalFMNextTrack = { id: 0 }; // 私人FM下一首歌曲信息（为了快速加载下一首）

    // 初始化howler
    this._howler = null;
    Object.defineProperty(this, '_howler', { enumerable: false });

    // 初始化基础参数
    this._init();
    // 暴露给全局
    window.neteasePlayer = this;
  }

  get progress() {
    return this._progress;
  }

  set progress(value) {
    if (this._howler) {
      this._howler.seek(value);
    }
  }

  get duration() {
    return this._duration;
  }

  _init() {
    Howler.autoUnlock = false;
    Howler.usingWebAudio = true;
    Howler.volume(this.volume);
    if (this._enabled) {
      this._setIntervals();
    }
  }

  _setIntervals() {
    // 同步播放进度
    // TODO: 如果 _progress 在别的地方被改变了，这个定时器会覆盖之前改变的值，是bug
    setInterval(() => {
      this._progress = this._howler === null ? 0 : this._howler.seek();
    }, 1000);
  }

  _replaceCurrentTrack(id, autoplay = true, ifUnplayableThen = 'playNextTrack') {
    return getTrackDetail(id).then((data) => {
      const track = data.data.songs[0];
      this._currentTrack = track;
      return this._getAudioSourceFromNetease(track).then((source) => {
        if (source) {
          this._playAudioSource(source, autoplay);
          // this._cacheNextTrack();
          return source;
        }
        ifUnplayableThen === 'playNextTrack' ? this.playNextTrack() : this.playPrevTrack();
      });
    });
  }

  async _getAudioSourceFromNetease(track) {
    const data = await getMP3(track.id);
    console.log(data.data.data[0].url);
    return new Promise((resolve) => {
      resolve(data.data.data[0].url);
    });
  }
  _playAudioSource(source, autoplay = true) {
    Howler.unload();
    this._howler = new Howl({
      src: [source],
      html5: true,
      format: ['mp3', 'flac'],
    });
    if (autoplay) {
      this.play();
      document.title = `${this._currentTrack.name} · ${this._currentTrack.ar[0].name}`;
    }
    this._howler.once('end', () => {
      this._nextTrackCallback();
    });
  }

  _nextTrackCallback() {
    this.playNextTrack();
  }

  _getNextTrack() {
    if (this._playNextList.length > 0) {
      const trackID = this._playNextList.shift();
      return [trackID, this.current];
    }
    // 当歌曲是列表最后一首 && 循环模式开启
    if (this.list.length === this.current + 1 && this.repeatMode === 'on') {
      return [this.list[0], 0];
    }
    // 返回 [trackID, index]
    return [this.list[this.current + 1], this.current + 1];
  }

  playNextTrack() {
    const [trackID, index] = this._getNextTrack();
    if (trackID === undefined) {
      this._howler && this._howler.stop();
      this._playing = false;
      return false;
    }
    this.current = index;
    this._replaceCurrentTrack(trackID);
    return true;
  }

  pause() {
    this._howler && this._howler.pause();
    this._playing = false;
    document.title = 'NeteaseMusic';
  }

  play() {
    if (this._howler && this._howler.playing()) return;
    this._howler && this._howler.play();
    this._playing = true;
    this._setIntervals();
    this._duration = this._howler === null ? 0 : this._howler._duration;
    // document.title = `${this._currentTrack.name} · ${this._currentTrack.ar[0].name}`;
  }

  playOrPause() {
    if (this._howler && this._howler.playing()) {
      this.pause();
    } else {
      this.play();
    }
  }

  // 替换播放列表
  replacePlaylist(trackIDs, playlistSourceID, playlistSourceType, autoPlayTrackID = 'first') {
    this._isPersonalFM = false;
    if (!this._enabled) this._enabled = true;
    this.list = trackIDs;
    this.current = 0;
    this._playlistSource = {
      type: playlistSourceType,
      id: playlistSourceID,
    };
    // 如果不指定播放哪首歌曲（trackid）那么默认从第一首播放 否值传入trackid指定歌曲播放
    if (autoPlayTrackID === 'first') {
      this._replaceCurrentTrack(this.list[0]);
    } else {
      this.current = trackIDs.indexOf(autoPlayTrackID);
      this._replaceCurrentTrack(autoPlayTrackID);
    }
  }
}
