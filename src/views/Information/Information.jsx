import store from "storejs";
import {getIPAddr,ip2Territory,fetchUserPlaylist,fetchUserHistory,fetchSongDetail,fetchArtistList} from '../../request'
import BScroll from '@better-scroll/core'
import dayjs from 'dayjs';//引入插件
import 'dayjs/locale/zh-cn';//引入汉化包
import relativeTime from 'dayjs/plugin/relativeTime';//引入插件
dayjs.extend(relativeTime);//扩展功能
dayjs.locale('zh-cn');
export default {
    render(){
        return (
            <div>
                {/*头部*/}
                <div class='w-[100vw] h-[74vw] relative'>
                    <div class='w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]'>
                        <Icon icon="ph:arrow-left"  class="text-[7vw] text-[#fff]" nativeOnClick={()=>this.$router.push('/HomeView')}/>
                        <Icon icon="ri:more-2-line" class='dark:text-[#e9ebf2] text-[#fff] font-[800] text-[7vw]' />
                    </div>
                    <img src={this.user.profile.backgroundUrl} alt="" class='w-[100vw] h-[74vw]'/>
                </div>
                {/*内容*/}
                <div class='dark:bg-[#151515] bg-[#f1f1f1] px-[4vw] pb-[10vw]'>
                    {/*主页*/}
                    <div class='dark:from-[#2D2C2C] dark:to-[#161616] bg-gradient-to-b from-[#f1f1f1] to-[#f1f1f1]  mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]'>
                        <img src={this.user.profile.avatarUrl} alt="" class='w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]'/>
                        <p class='dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]'>{this.user.profile.nickname}</p>
                        <div class='wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]'>
                            <span class='px-[2vw]'><span>{this.userData.profile.follows}</span> 关注</span>
                            <span class='px-[2vw]'><span >{this.userData.profile.followeds}</span> 粉丝</span>
                            <span class='px-[2vw]'>Lv.<span>{this.userData.level}</span></span>
                        </div>
                        <div class='h-[11vw] flex items-center justify-center'>
                            <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>IP:{this.ip.country}{this.ip.city}</span>
                            <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>
                                {this.userData.profile.gender ? <Icon icon="ant-design:man-outlined" class='text-[3vw] mr-[1vw] text-[#5c9bed]'/>: <Icon icon="ant-design:woman-outlined" class='text-[3vw] mr-[1vw] text-[#ff7474]'/>}
                                {this.birthday(this.userData.profile.birthday)}后 {this.getZodiacSign(this.userData.profile.birthday)}
                            </span>
                            <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>村龄 {Math.floor(this.userData.createDays / 365)} 年</span>
                        </div>
                        <div class='flex items-center justify-center'>
                            <span class='dark:border-[#383838] dark:text-[#EEEEEE] px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]' onClick={()=>this.$router.push('/edit')}>编辑资料</span>
                            <span class='dark:border-[#383838] dark:text-[#EEEEEE] w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]'>
                                <Icon icon="ep:arrow-up-bold" color="white" class='text-[3vw] mt-[0.6vw]' rotate={this.show?4:2} nativeOnClick={this.fn}/>
                            </span>
                        </div>
                        {/*喜欢*/}
                        {this.show ?
                            <div class="scroll-wrapper w-[92vw] overflow-hidden" ref="scroll">
                                <div class="scroll-content w-[200vw]">
                                    <div class=" rounded-[10px] w-[24vw] h-[36vw] bg-[rgb(247,247,248)]">
                                        <img src={this.img} alt="" class="translate-y-[2.5vw] w-[12vw] h-[12vw] rounded-[50%] ml-[50%] translate-x-[-50%]"/>
                                        <h1 class="text-[3vw] mt-[4vw] text-center text-[rgb(63,70,88)]">晨留心</h1>
                                        <p class="mx-[4vw] mt-[1.5vw] text-[3vw] line-clamp-1 text-[rgb(165,168,176)]">共同关注了</p>
                                        <div class="border-[1px] mt-[2vw] ml-[50%] translate-x-[-50%] border-[red] w-[15vw] leading-[5vw] rounded-[15px] text-center text-[3vw] text-[red]">+&nbsp;关注</div>
                                    </div>
                                </div>
                           </div>
                            :<div></div>
                        }
                    </div>

                    {/*tab切换*/}
                    <div>
                        {/*选项*/}
                        <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto">
                            <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">主页</div>
                            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">动态</div>
                            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">播客</div>
                            <div class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"></div>
                        </nav>
                        {/*卡片*/}
                        <div>
                            {/*音乐品味*/}
                            <div class='dark:bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]'>
                                <h1 class='dark:text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]'>音乐品味</h1>
                                <div class='flex justify-evenly'>
                                    <div class='dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative'>
                                        <div class='dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]'>我的喜欢</div>
                                        <p class='dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]'>{this.myLove}首</p>
                                        <div class='dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center'>
                                            <Icon icon="ph:heart-fill" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>喜欢的音乐
                                        </div>
                                    </div>
                                    <div class='dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative'>
                                        <div class='dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]'>累计听歌
                                        </div>
                                        <p class='dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]'>{this.userData.listenSongs}首</p>
                                        <div class='dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center'>
                                            <Icon icon="ri:rhythm-line" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>喜欢的音乐
                                        </div>
                                    </div>
                                    <div class='dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]'>
                                        <div class='dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]'> 本周关键词</div>
                                        <p class='dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]'>属于你的音乐档案</p>
                                        <div class='dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center'>
                                            <Icon icon="fa-solid:hourglass" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>黑胶时光机
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 创建的歌单*/}
                            <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
                                <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">创建的歌单<span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({this.create.length}个)</span></p>
                                <ul class="px-[4vw] pb-[4vw]">{this.create.map((item) => (
                                    <li class="flex mb-[1.5vw]">
                                        <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                                            <img src={item.coverImgUrl} class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"/>
                                            <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                                        </div>
                                        <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                                            <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{item.name}</p>
                                            <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                                                {item.trackCount}首，播放{this.dataTruncation(item.playCount)}次
                                            </p>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                                {this.create.length >= 10 ? <div class='dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>查看全部<Icon icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/></div> :<div></div>}
                            </div>
                            {/* 收藏的歌单*/}
                            <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
                                <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">收藏的歌单<span
                                    class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({this.collect.length}个)</span>
                                </p>
                                <ul class="px-[4vw] pb-[4vw]">{this.collect.map((item,index) => (
                                    index<10?
                                    <li class="flex mb-[1.5vw]">
                                        <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                                            <img src={item.coverImgUrl} class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"/>
                                            <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                                        </div>
                                        <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                                            <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{item.name}</p>
                                            <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                                                {item.trackCount}首，By{item.creator.nickname}，播放{this.dataTruncation(item.playCount)}次
                                            </p>
                                        </div>
                                    </li>:<li></li>))}
                                </ul>
                                {this.collect.length >= 10 ? <div class='dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>查看全部<Icon
                                    icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/></div> : <div></div>}
                            </div>
                            {/* 评论 */}
                            {this.history.length != 0 ? <div class="dark:bg-[#2C2C2C]  mt-[4vw] w-[92vw]  bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]">
                                    <div class="flex justify-between px-[4vw]">
                                        <p class="dark:text-[#E9E9E9] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw]">我的评论<span class="dark:text-[#9D9D9D] text-[#9599a3] font-[200] text-[2.7vw] ml-[1.6vw]">({this.history.length})</span></p>
                                        <Icon icon="entypo:lock" color="#b3b3b3"/>
                                    </div>
                                    {/* 评论歌曲 */}
                                    <div class="flex justify-between px-[4vw]">
                                        <div class='flex items-center'>
                                            <img src={this.picUrl} alt="" class='w-[8vw] h-[8vw] rounded-[5px] mr-[1.5vw]'/>
                                            <div class="dark:text-[#99999A] text-[rgb(177,180,187)] text-[2.8vw]">单曲「{this.music?.name}」 - {this.music.artist?.name}</div>
                                        </div>
                                        <Icon icon="uiw:like-o" color="#b3b3b3"/>
                                    </div>
                                    {/* 评论文字 */}
                                    <div class="dark:text-[#EDEDED] mt-[3.6vw] px-[4vw]  text-[3.6vw]  pb-[1vw] text-[#2a3146]">{this.history[0]?.content}</div>
                                    {/* 多久之前 */}
                                    <p class="dark:text-[#A5A5A5] mt-[1vw] text-[rgb(169,173,181)] text-[2vw] px-[4vw] pb-[4vw]">{this.time}</p>
                                    {this.history.length >= 2 ? <div class='border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>查看全部<Icon icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/></div> : <div></div>}
                                </div>: <div></div>}
                            {/*基本信息*/}
                            <div class='dark:bg-[#2C2C2C]  w-[92vw] h-[50vw] bg-[#fff]  rounded-[15px]' >
                                <nav class='h-[15vw] flex items-center justify-between mx-[3.8vw]'>
                                    <div class='dark:text-[#ECECEC] text-[4vw] text-[#333]'>基本信息</div>
                                    <div class='dark:text-[#ECECEC] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]'>领取村名证</div>
                                </nav>
                                <div class='dark:text-[#ADADAD] h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]'>
                                    <div class='w-[100%]'>村龄：<span class='dark:text-[#E3E3E3]'>{Math.floor(this.userData.createDays / 365)}年 ({this.TimestampConversion(this.userData.createTime)}注册)</span></div>
                                    <div class='w-[100%]'>性别：<span class='dark:text-[#E3E3E3]'>{this.userData.profile.gender ? '男' : '女'}</span></div>
                                    <div class='w-[100%]'>年龄：<span class='dark:text-[#E3E3E3]'>{this.birthday(this.userData.profile.birthday)}后 {this.getZodiacSign(this.userData.profile.birthday)}</span></div>
                                </div>
                                <div class='dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>
                                    查看全部<Icon icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    data(){
        return {
            user:[],
            userData:[],
            ip:'',//ip地址
            show:false,
            collect:[],//收藏的歌单
            create:[],//创建的歌单
            myLove:'',
            history:[],//评论
            music:'',//评论的歌曲信息
            time:'',//评论的时间
            picUrl:'',//评论图片
            dataLove:[],//可能喜欢
        }
    },
    methods: {
        fn(){
            this.show = !this.show;
            this.init()
        },
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume;
            }
        },
        //时间
        TimestampConversion(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // 注意月份从 0 开始，需要加 1
            return (`${year}年${month}月`);
        },
        //出生
        birthday(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            return (('' + (year - year % 5)).split('').splice(2, 4).join(''))
        },
        //星座函数
        getZodiacSign(timeStamp) {
            const date = new Date(timeStamp);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const zodiacSigns = [
                "摩羯座", "水瓶座", "双鱼座", "白羊座",
                "金牛座", "双子座", "巨蟹座", "狮子座",
                "处女座", "天秤座", "天蝎座", "射手座"
            ];
            const startDates = [1, 20, 19, 21, 21, 22, 23, 23, 23, 23, 22, 22];
            const endDates = [2, 18, 20, 19, 20, 21, 22, 22, 22, 22, 21, 21];
            let signIndex;
            (day >= startDates[month - 1] && month !== 12) || (day <= endDates[month - 1] && month === 12) ? signIndex = month - 1: signIndex = (month + 9) % 12;
            return zodiacSigns[signIndex];
        },
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                scrollX: true,
                probeType: 3 // listening scroll event
            })
        }
    },
    mounted() {

    },
    async created(){
        console.log('__m__User',store.get('__m__User'));
        console.log('__m__UserData',store.get('__m__UserData'));
        this.user = store.get('__m__User');
        this.userData = store.get('__m__UserData');
        const res4 = await fetchUserPlaylist(this.user.profile.userId);

        this.collect= res4.data.playlist.filter(item => item.subscribed);//收藏的歌单
        this.create= res4.data.playlist.filter(item => !item.subscribed);//创建的歌单
        this.myLove = res4.data.playlist[0].trackCount //我喜欢的歌曲
        this.create = this.create.slice(1,this.create.length);
        this.ip = getIPAddr().then(res=>{ip2Territory(res.data.ip).then(res => this.ip = res.data)})//ip
        //用户历史评论
        const res5 = await fetchUserHistory(this.user.profile.userId);
        if(res5.data.data.comments.length != 0) {
            this.history = res5.data.data.comments //评论
            this.music = JSON.parse(this.history[0].resourceInfo);//评论的歌曲信息
            this.time = dayjs(this.history[0].time).fromNow().replace(' ','');// 时间戳
            const img = await fetchSongDetail(this.music.id);//歌曲信息
            this.picUrl = img.data.songs[0].al.picUrl;//歌曲图片
        }

        //歌手分类列表
        const res6 = await fetchArtistList();
        this.dataLove = res6.data.artists.slice(0,8);
        console.log(this.dataLove);
    }
}