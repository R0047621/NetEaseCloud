//所有的请求都定义在这个位置
import axios from 'axios';
import store from "storejs";
// 拼接axios的路由
const http = axios.create({
  baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const cookie = store.get("__m__cookie") ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config
})
export const fetchPlaylistHot = () => http.get('/playlist/hot')
export const fetchPlaylist = (cat) => http.get('/top/playlist',{ params:{cat}});
//首页总数据
export const homepageList = () => http.get('homepage/block/page/')
//日历
export const calendar = () => http.get(`/calendar?startTime=${getPreviousDayTimestamp()[0]}&endTime=${getPreviousDayTimestamp()[1]}`)
//菜单
export const dragonBall = ()=>http.get('/homepage/dragon/ball')
//热门话题
export const hotTopic = () =>http.get('/topic/detail/event/hot?actid=111551188')
// 猜你喜欢
export const detail = () => http.get('/search/hot/detail');
// 获取歌单所有歌曲
export const playlistTrackAll = (id) => http.get('/playlist/track/all',{params:{id}})
//歌单详情头部
export const playlistDetail = (id) => http.get('/playlist/detail',{params:{id}})
//歌单详情猜你喜欢
export const relatedPlaylist = (id) => http.get('/related/playlist',{params:{id}})
// 获取默认搜索关键词
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSearchResult = (params) => http.get('/cloudsearch', { params });
//登录二维码key生成接口
export  const getQrKey = () => http.get('/login/qr/key');
//二维码生成接口
export const getQrInfo = (key,qrimg = 1) => http.get('/login/qr/create',{params:{key,qrimg}})
//二维码检测扫码状态接口
export const checkQrStatus = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})
//获取账号信息
export const getUserAccount = () => http.get('/user/account');
//获取用户详情
export const getUserDetail = (uid) => http.get('/user/detail', {params:{uid}})
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

