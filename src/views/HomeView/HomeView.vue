<template>
  <div class='bg-[#F4F4F4]' :class='{dark:darkMode}'>
    <div class='h-[100vh]' :class='drawerVisible?"overflow-hidden":"overflow-auto"'>
      <div class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
        <div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
          <Icon icon="majesticons:menu-line" class="dark:text-[#e8eaf2] text-[#3A455B]" width="10vw" height="10vw" @click.native='drawerVisible = !drawerVisible'/>
          <div class='relative'>
            <label for="">
              <input type="text" @focus="$router.push('/Search')" placeholder="Love Is Gone (Acoustic)" class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd]  text-[#8189A1] to-[#f3d9ef] opacity-0.2  w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]" />
            </label>
            <Icon icon="tabler:search" class='absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1]' />
            <Icon icon="tabler:scan" class='absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1]' />
          </div>
          <Icon icon="material-symbols:auto-detect-voice-outline" width="8vw" height="8vw" class="dark:text-[#e8eaf2] text-[#3A455B]" />
        </div>
        <!-- 轮播 -->
        <section class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto">
          <van-swipe class="my-swipe w-[500vw] h-[100%] overflow-hidden relative flex" :autoplay="3000" indicator-color="white">
            <van-swipe-item  v-for="item in banners" :key="item.id" class='w-[88vw]'>
              <img :src="item.pic" class="w-[100%] h-[100%]"  alt=''/>
            </van-swipe-item>
          </van-swipe>
        </section>
      </div>
      <div class='dark:bg-[#1a1c23] bg-[#f1f1f1]'>
        <!--菜单-->
        <div class=' w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[20vw]' ref="scroll">
          <div class='flex w-[190vw] mx-auto overflow-hidden  h-[20vw] scroll-content relative'>
            <MenuItem class=' w-[19vw] scroll-item  flex items-center justify-center flex-wrap mr-[6vw]' v-for='item in ball' :key='item.id' :date='item'/>
            <span class='dark:text-[#1a1c23] absolute  top-[-1vw] w-[13vw] h-[19vw] flex  justify-center items-center text-[3.5vw] text-[#fff] font-[800]'><span>{{ new Date().getDate() }}</span></span>
          </div>
        </div>
        <!--推荐歌单 -->
        <TitleItem :date="`推荐歌单`"/>
        <div class='w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper  border-[#EBEDF2]' ref="scroll1">
          <div class='w-[210vw] flex  pl-[2vw]'>
            <div class='pt-[1vw] relative'>
              <div class='w-[31vw] relative z-[1]'>
                <div class='dark:bg-[#1A1C23] w-[31vw] h-[31vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]'>
                  <transition name='abc'  v-for=" (item,index) in resources" :key="item">
                    <div v-if='visible === index' class='absolute top-0 left-0"'>
                      <img :src='item.uiElement.image.imageUrl' alt='' class='w-[31vw] h-[31vw] rounded-[8px]'>
                    </div>
                  </transition>
                  <Icon icon="iconoir:infinite" class="absolute text-[#fff] w-[10vw] h-[6vw] right-0"/>
                </div>
                <p class='dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item'>{{resourceData}}</p>
              </div>
              <div class='dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]'></div>
            </div>
            <RecommendItem v-for='item in personalized' :date='item' class='w-[31vw] ml-[3vw]'/>
          </div>
        </div>

        <!--新歌新碟\数字专辑-->
        <TitleItem :date="`新歌新碟\\数字专辑`"/>
        <div class='w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper  border-[#EBEDF2]' ref="scroll2" >
          <div class='scroll-content flex w-[710vw]'>
            <NewSongItem class='w-[88vw] scroll-item pb-[3.8vw]' v-for='item in song' :key='item.id' :date='item'/>
          </div>
        </div>

        <!--排行榜-->
        <TitleItem :date="`排行榜`"/>
        <div class='w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]' ref="scroll3" >
          <div class='scroll-content flex w-[540vw]'>
            <RankingItem  class='dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000  shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]' v-for='item in charts' :key='item.id' :date='item'/>
          </div>
        </div>

        <!--热门话题-->
        <TitleItem :date="`热门话题`"/>
        <div class='w-[95vw] ml-[4vw] overflow-hidden scroll-wrapper'  ref="scroll4">
          <div class='w-[330vw] flex mb-[6.31vw] scroll-content'>
            <TalkItem class='relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]' v-for='(item, index) in hotTopic' :style="{ 'background-color': getColor(index) }" :date='item' :key='item.id'/>
          </div>
        </div>

        <!--音乐日历-->
        <TitleItem :date="`音乐日历`"/>
        <div class='w-[91vw] pt-[1vw] ml-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]'>
          <div class='scroll-content flex w-[540vw] mb-[6.31vw]'>
            <ul class='dark:bg-[#25272e] w-[91vw] scroll-item shadows bg-[#fff] mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[3.8vw]  '>
              <li class='flex mt-[3vw]' v-for='item in calendarEvents'>
                <div class='flex-1'>
                  <p class='dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]'>{{new Date().getMonth()+1}}/{{new Date().getDate()}}</p>
                  <div class='dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]'>{{item.title}}</div>
                </div>
                <div class='flex-4'><img :src='item.imgUrl' alt='' class='w-[15vw] h-[15vw] rounded-[10px]'></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--抽屉-->
    <Drawer :visible.sync="drawerVisible" direction='ltr'>
      <template #header>
        <div class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[84vw] bg-[#f1f1f1]">
          <!-- 用户头像开始 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden">
                <Icon icon="gridicons:user" class=" text-[#f9dada] w-[7vw] h-[7vw]" />
              </div>
              <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">立即登录</span>
              <Icon icon="mingcute:right-line" class="dark:text-[#f0f0f0] text-[#383838] text-[4vw]" />
            </div>
          </div>
          <Icon icon="teenyicons:scan-outline" class="dark:text-[#f0f0f0] text-[#383838] text-[5vw]" />
          <!-- 用户头像结束 -->
        </div>
      </template>
      <div class='dark:bg-[#151515] bg-[#f1f1f1] h-[95vh] scroll-wrapper overflow-hidden' ref='scroll5'>
        <div class='scroll-content h-[192vh]'>
          <div class='mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]'>
            <div class='h-[10vw] flex justify-between items-center'>
              <h1 class='text-[3.6vw] text-[#ffeeeb]'>开通黑胶VIP</h1>
              <div class='w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]'>会员中心</div>
            </div>
            <div class='h-[7vw] border-b-[1px] border-[#494443]'>
              <p class='text-[2.73vw] '>点击恢复超21项专属特权</p>
            </div>
            <div class='h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]'>
              <div class='text-[2.5vw] h-[11vw]'>受邀专享，黑胶VIP低至0.27元/天!</div>
              <div class='scale-50 w-[8vw] '>
                <div class='w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50'>受邀专享</div>
              </div>
            </div>
          </div>
          <LeftSidebarModuleView v-for='item in DrawerData' :key='item' :item='item' :checks.sync='darkMode'/>
          <div class='dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239] '>关闭云音乐</div>
        </div>
      </div>
    </Drawer>
  </div>
</template>
<script>
import { homepageList ,calendar,dragonBall,hotTopic} from '../../repuest'
import BScroll from '@better-scroll/core'
import RecommendItem from './components/RecommendItem.vue';
import RankingItem from './components/RankingItem.vue';
import TitleItem from './components/TitleItem.vue';
import NewSongItem from './components/NewsongItem.vue';
import MenuItem from './components/MenuItem.vue';
import TalkItem from './components/TalkItem.vue'
import Banner from './components/Banner.vue';
import LeftSidebarModuleView from './components/LeftSidebarModuleView.vue';
import {Search, Swipe, SwipeItem} from 'vant';



export default {
  components:{ LeftSidebarModuleView, RankingItem,RecommendItem,TitleItem,NewSongItem,MenuItem,TalkItem,Banner ,VanSwipe: Swipe, VanSwipeItem: SwipeItem,},
  data() {
    return {
      menu: [],//菜单
      banners: [],//轮播
      ball:[],//菜单
      personalized:{uiElement:{subTitle:{title:'推荐歌单'}}},//推荐歌单
      resources:[],//推荐歌单动画数据
      resourceData:'',//推荐歌单文字数据
      song:[],//新歌
      charts:[],//排行榜
      calendarEvents:[],//音乐日历
      hotTopic:[],//热门话题
      visible:0,
      drawerVisible:false,//抽屉
      DrawerData:[
        {
          title:false,
          data:[
            { icon:'solar:letter-linear', name:'我的消息', rigth:false, },
            { icon:'cib:shell', name:'云贝中心', rigth:'签到', },
            { icon: 'mingcute:light-line', name: '创作者中心', rigth: false, }
          ]
        },
        {
          title:'音乐服务',
          data:[
            { icon:'ph:star-of-david-light', name:'趣测', rigth:'点击查看今日运势', },
            { icon:'ion:ticket-outline', name:'云村有票', rigth:false, },
            { icon: 'mdi:help-box-outline', name: '多多西西口袋', rigth: false, },
            { icon: 'ep:handbag', name: '商城', rigth: false, },
            { icon: 'streamline:interface-signal-square-heart-line-stats-beat-square-graph', name: 'Beat专区', rigth: '顶尖制作邀你创作', },
            { icon: 'tabler:bell-ringing-2', name: '口袋彩铃', rigth: false, },
            { icon: 'icon-park-outline:gamepad', name: '游戏专区', rigth: '音乐浇灌治愈花园', }
          ]
        },
        {
          title:'其他',
          data:[
            { icon:'ri:settings-line', name:'设置', rigth:false, },
            { icon:'line-md:moon-loop', name:'深色模式', rigth:false, btn:true },
            { icon: 'mdi:alarm-clock', name: '定时关闭', rigth: false, },
            { icon: 'ph:t-shirt-thin', name: '个性装扮', rigth: false, },
            { icon: 'iconoir:headset-issue', name: '边听边存', rigth: '未开启' },
            { icon: 'iconoir:headset-issue', name: '在线听歌免流量', rigth: false, },
            { icon: 'solar:card-linear', name: '音乐黑名单', rigth: '未开启', },
            { icon: 'ant-design:stop-outlined', name: '青少年模式', rigth: '未开启', },
            { icon: 'ep:alarm-clock', name: '音乐闹钟', rigth: false, }
          ]
        },
        {
          title:false,
          data:[
            { icon:'iconoir:page', name:'我的订单', rigth:false, },
            { icon:'ion:ticket-outline', name:'优惠券', rigth:false, },
            { icon:'ep:service', name:'我的客服', rigth:false, },
            { icon: 'ri:share-circle-line', name: '分享网易云音乐', rigth: false, },
            { icon: 'ph:file-thin', name: '个人信息收集与使用清单', rigth: false, },
            { icon: 'icon-park-outline:circle-five-line', name: '个人信息第三方共享清单', rigth: false, },
            { icon: 'icons8:share', name: '个人信息与隐私保护', rigth: false, },
            { icon: 'icon-park-outline:attention', name: '关于', rigth: false, }
          ]
        },
      ],
      darkMode:false,//主题
    }
  },
  mounted() {
    this.init(this.$refs.scroll);
    this.init(this.$refs.scroll1);
    this.init(this.$refs.scroll2);
    this.init(this.$refs.scroll3);
    this.init(this.$refs.scroll4);
    this.init1(this.$refs.scroll5);
    this.animateItems();
  },
  methods: {
    init(name) {
      this.bs = new BScroll(name, {
        scrollX: true,
        probeType: 3
      })
    },
    init1(name) {
      this.bs = new BScroll(name, {
        scrollY: true,
        probeType: 3,
        disableMouse: false,
        disableTouch: false,
        mouseWheel: true,
        click: true,
      })
    },
    getColor(index) {
      const colorMap = {
        0: '#949494',
        1: '#8685AA',
        2: '#ae734e',
        3: '#949494',
        default: '#8685AA',
      };
      return colorMap[index] || colorMap['default'];
    },
    fn(){
      this.drawerVisible = false;
    },
    animateItems() {
      setInterval(() => {
        this.visible++;
        if(this.visible === this.resources.length){
          this.visible = 0;
        }
        this.resourceData = this.resources[this.visible].uiElement.mainTitle.title
      }, 5000);
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
  },
  updated() {
    this.bs.refresh();
  },
  async created() {
    const res = await homepageList();
    this.banners = res.data.data.blocks[0].extInfo.banners;  //轮播
    this.personalized = res.data.data.blocks[1].creatives.slice(1,res.data.data.blocks[1].creatives.length);//推荐歌单
    this.charts = res.data.data.blocks[3].creatives//排行榜
    this.song = res.data.data.blocks[5].creatives // 新歌速递
    this.resources = res.data.data.blocks[1].creatives[0].resources
    this.resourceData = this.resources[0].uiElement.mainTitle.title;
    console.log(this.personalized);
    // 菜单
    const res1 = await dragonBall();
    this.ball = res1.data.data;
    // 音乐日历
    const res2 = await calendar()
    this.calendarEvents = res2.data.data.calendarEvents.slice(0,2);
    //热门话题
    const res3 = await hotTopic();
    this.hotTopic = res3.data.events
  },

}
</script>
<style>
.van-swipe__track {
  display: flex !important;
}
input {
  outline: none;
}
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
.abc-enter{
  opacity: 0;
  transform: translateY(100%) scale(.7);
}
.abc-enter-active{
  transition: all ease-in-out .6s;
}
.abc-enter-to{
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave{
  transform: translateY(0) scale(1);
}
.abc-leave-active{
  transition: all ease-in-out .6s;
}
.abc-leave-to{
  transform: translateY(-100%) scale(.7);
}
.van-swipe__indicators i {
  display: inline-block;
  width: 2vw;
  height: 2vw;
  background-color: #999;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.shadows{
  box-shadow: 0 0 10px rgba(204, 204, 204, 0.3);
}

</style>
