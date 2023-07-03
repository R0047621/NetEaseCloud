//所有的请求都定义在这个位置
import axios from 'axios';
// 拼接axios的路由
const http = axios.create({
  baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
export const fetchPlaylistHot = () => http.get('/playlist/hot')
export const fetchPlaylist = (cat) => http.get('/top/playlist',{ params:{cat}});
export const homepageList = () => http.get('homepage/block/page')
//日历
export const calendar = () => http.get(`/calendar?startTime=${getPreviousDayTimestamp()[0]}&endTime=${getPreviousDayTimestamp()[1]}`)
//菜单
export const dragonBall = ()=>http.get('/homepage/dragon/ball')
//热门话题
export const hotTopic = () =>http.get('/topic/detail/event/hot?actid=111551188')
//推荐歌单
export const personalized =() => http.get('/personalized?limit=11');



// 获取默认搜索关键词
/**
 * @description 获取默认搜索关键字
 * @parm {Array} xxx
 * @returns  {Promise} xxx
 */
export const fetchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) => http.get('/cloudsearch', { params });

export async function playlist() {
  //获取所有个歌单的id
  const res = await http.get('/toplist/detail');
  //通过id获取歌曲
  const playlist = await Promise.all(res.data.list.map(({id}) => http.get('/playlist/detail', {params: {id}})));
  console.log(playlist.map(item => item.data.playlist));
  return (playlist.map(item => item.data.playlist))
}



//时间戳
function getPreviousDayTimestamp() {
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();
  const oneDayMillis = 24 * 60 * 60 * 1000;
  const startTimestamp = currentTimestamp - oneDayMillis;
  const endTimestamp = currentTimestamp - 1;
  return [startTimestamp,endTimestamp]
}


// 歌单排行
