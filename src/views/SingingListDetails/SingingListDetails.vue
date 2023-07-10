<template>
  <div>
    <div ref="top" :style="`background: ${gradientColor}`" class="h-[70vw] transition-all duration-20 0 relative bg-gradient-to-br from-[#486D8D] to-[#6186AB] pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[13.5vw]">
      <!--头部-->
      <nav class="a2 pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between ">
        <div class="flex items-center">
          <Icon icon="ph:arrow-left"  class="text-[7vw] text-[#fff]" @click.native="$router.push(`/HomeView`)"/>
          <div class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative">
            <transition name="down">
                <span class="text-[4.2vw] text-[#fff] ml-[4.7vw] absolute textScrolling whitespace-nowrap" v-if="index">
                    <span> {{ title.data?.playlist.name }}</span>
                </span>
            </transition>
            <transition name="upward">
              <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] relative" v-if="!index">歌单</div>
            </transition>
          </div>
          <div v-if="index" class="px-[2vw] flex items-center justify-center h-[7vw] rounded-[20px] bg-[#dedede] bg-opacity-10 text-[#f8fefe] text-[3vw] ml-[5vw] font-semibold">
              <Icon icon="mdi:favorite-add" color="white" class="text-[5vw] mr-[1vw]"/>收藏
          </div>
        </div>
        <div class="flex items-center">
          <Icon icon="grommet-icons:form-search" class="text-[7vw] text-[#fff] mr-[5vw]"/>
          <Icon icon="ri:more-2-line"  class="text-[7vw] text-[#fff]"/>
        </div>
      </nav>
      <div class="fixed top-0  h-[13.5vw] w-[100vw] left-0 z-[998] opacity-0 " ref="title" :style="`background: ${gradientColor}`"></div>


      <!--内容-->
      <div v-show="tab" class="transition-all fade-in">
        <section class="h-[29vw] flex pt-[2.6vw]  justify-between">
          <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
            <img  alt="" class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2] " v-lazy="{
              src:title.data?.playlist.coverImgUrl,
              loading:'/static/loading.png',
              error:'/static/loading.png',
            }" >
            <div class="w-[20vw] h-[10vw]  bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
            <div  class="absolute top-0 left-0 pr-[1.4vw] pt-[2vw]  justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2]  transform scale-80">
              <Icon icon="ion:play" width="10" class='text-[#fff] w-[3vw] h-[3vw]' />
              <span  class="font-[800] text-[1.5vw]">{{dataTruncation(title.data?.playlist.playCount)}}</span>
            </div>
          </div>
          <div class="w-[67vw] pr-[12vw]">
            <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800] ">{{ title.data?.playlist.name }}</p>
            <div class="h-[10.5vw] flex items-center">
              <img :src="title.data?.playlist.creator?.avatarUrl" alt="" class="w-[6vw] h-[6vw] rounded-[50%]">
              <span class="text-[2.73vw]  ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50 ">   {{ title.data?.playlist.creator.nickname }}</span>
              <span class="px-[2vw]  py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50   bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                 <Icon icon="material-symbols:add"  class="text-[4vw] text-[#fff] "/>关注
            </span>
            </div>
            <div class="flex">
              <div class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw]  bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]" v-for="item in title.data?.playlist?.tags">
                <span class="text-[2.2vw]">{{item}}</span>
                <Icon icon="ep:arrow-up-bold" color="white" :rotate="1" class="text-[3vw] ml-[0.6vw]"/>
              </div>
            </div>
          </div>
        </section>
        <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw]  justify-between">
          <span class="text-[#fff] opacity-50  text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{title.data?.playlist.description}}</span>
          <Icon icon="ep:arrow-up-bold" color="#D8E4F5" :rotate="1" class="text-[3vw]"/>
        </p>
      </div>
      <div v-show="!tab" class="fade-in">
        <div class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">喜欢这个歌单的用户也听了</div>
        <div class="w-[95vw] scroll-wrapper overflow-hidden" ref="scroll">
          <div class="flex w-[160vw]">
            <div v-for="item in relatedPlay.data?.playlists" :key="item" class="w-[28vw] mr-[2.5vw]">
              <div class='w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]'>
                <img :src='item?.coverImgUrl' alt='' class='w-[28vw] h-[28vw] rounded-[8px] relative z-[1]'>
                <div class='dark:bg-[#272727] w-[26vw] h-[28vw]  bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]'></div>
              </div>
              <p class='dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item'>{{item?.name}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%]  bg-opacity-20 bg-[#fff] flex items-center justify-center" @click="fn">
        <Icon icon="ep:arrow-up-bold" color="white" :rotate="2" class="text-[3vw] mt-[0.5vw]" :style="{transform:!tab ? 'rotate(180deg)' : 'rotate(0deg)'}"/>
      </div>

      <div class="flex items-center mt-[3.5vw]">
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px]  bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="majesticons:share" color="white" class="text-[5vw] mr-[1.8vw]"/> {{ dataTruncation(title.data?.playlist.shareCount)}}
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
          <Icon icon="ant-design:message-filled" color="white" class="text-[5vw] mr-[1.8vw]"/> {{ dataTruncation(title.data?.playlist.commentCount)}}
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="mdi:favorite-add" color="white" class="text-[5vw] mr-[1.8vw]"/>{{dataTruncation(title.data?.playlist.subscribedCount) }}
        </div>
      </div>
    </div>
    <div class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
      <!--头部-->
      <nav class="a1 h-[13vw] flex items-center  justify-between">
        <div class="flex items-center">
          <Icon icon="heroicons-solid:play" class="text-[#ED3E20] text-[8vw]" @click.native="playAll"/>
          <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
          <span class="text-[#8C9094] text-[2.7vw]">({{data.data?.songs?.length}})</span>
        </div>
        <div class="flex items-center">
          <Icon icon="clarity:download-line" class="text-[5vw] text-[#2C3034]"/>
          <Icon icon="solar:list-check-bold" class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw]" />
        </div>
      </nav>
      <div>
        <div class="flex items-center h-[14vw]" v-for="(item, index) in data.data?.songs" :key="item.id">
          <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{ index + 1 }}</div>
          <div class="font-medium text-[3.6vw] w-[64vw]">
            <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
              <span class="text-ellipsis text-[#000]">{{item.name}}</span>
              <span class="text-[#949797]" v-if="item.alia.length!==0">{{item.alia}}</span>
            </div>
            <div class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw]">
              <span >{{item.ar[0].name}}-{{item.al.name}}</span>
            </div>
          </div>
          <Icon icon="arcticons:fpt-play" class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw]"/>
          <Icon icon="ri:more-2-line" class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw]"/>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import  {playlistDetail, playlistTrackAll, relatedPlaylist} from '../../request'
import {all} from "axios";
import BScroll from '@better-scroll/core'
import RecommendItem from "../HomeView/components/RecommendItem.vue";
import { debounce } from 'lodash';
export default {
  components: {RecommendItem},
  mounted() {
    this.init(this.$refs.scroll);
    window.addEventListener('scroll', this.listener, true);  // 监听（绑定）滚轮滚动事件
    this.generateRandomColor();
  },
  updated() {
    this.bs.refresh();
  },
  methods: {
    playAll(){
      window.$player.replacePlaylist(this.data.data.songs.map((song) => song.id,'','',''));
      console.log('$player',window.$player._currentTrack?.al?.picUrl);
    },
    all,
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume;
      }
    },
    init(name) {
      this.bs = new BScroll(name, {
        scrollX: true,
        probeType: 3,
        click: true,
      })
    },
    fn() {
      this.tab = !this.tab;
      !this.tab? this.$refs.top.style.height = '82vw' : this.$refs.top.style.height = '70vw'
    },
    //滚动条触发事件
    listener() {
      const scrollPosition = document.documentElement.scrollTop;
      if (scrollPosition <= this.$refs.top.clientHeight) this.$refs.title.classList.add('transition');
      if(scrollPosition <= 30) this.$refs.title.classList.remove('transition');
      this.index = scrollPosition;
    },
    generateRandomColor() {
      const hue = Math.floor(Math.random() * 360); // 色调
      const saturation = Math.floor(Math.random() * 80); // 饱和度
      const lightness = Math.floor(Math.random() * 50) + 10; // 亮度
      this.gradientColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    },
  },
  data(){
    return {
      title:[],//获取歌单详情
      data:[],//歌单所有歌曲
      relatedPlay:[],//猜你喜欢
      tab:true,//切换
      index:false// 背景切换
    }
  },
  async created(){
    this.title = await playlistDetail(this.$route.params.id.replace(':id=',''))
    this.data = await playlistTrackAll(this.$route.params.id.replace(':id=',''))
    this.relatedPlay = await relatedPlaylist(this.$route.params.id.replace(':id=',''));
    // console.log(this.relatedPlay.data.playlists);
    console.log(this.data);
  },
}
</script>
<style scoped>
.transition{
  opacity: 1;
  transition: all .5s;
}
 .a1 {
   position: sticky;
   top: 13.5vw;
   z-index: 998;
   background-color: white;
 }
 .a2 {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 999;
   //background-color: #4B7090;
 }

 .upward-enter,
 .upward-leave-to {
   transform: translateY(-100%);
   opacity: 0;
 }
 .down-enter,
 .down-leave-to {
   transform: translateY(100%);
   opacity: 0;
 }

 .down-enter-active,
 .down-leave-active,
 .upward-enter-active,
 .upward-leave-active {
   transition: all ease-in-out .3s;
 }

 .down-enter-to,
 .down-leave,
 .upward-enter-to,
 .upward-leave {
   transform: translateY(0);
   opacity: 1;
 }


.textScrolling {
  animation-name: roll;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 5s;
}
@keyframes roll {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
}
.fade-in {
  animation: fade-in 1.2s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>