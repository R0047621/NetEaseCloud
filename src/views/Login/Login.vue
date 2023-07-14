<template>
  <div class="bg-[#FDFBFC] h-[100vh]">
    <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
      <Icon icon="formkit:left" class="text-[6vw]" @click.native="$router.push('/HomeView');"/>
      <div class="text-[4vw] text-[#696969]">游客登录</div>
    </div>
    <img src="/static/logo.fill.svg" alt="" class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]">

    <div v-if="code === 802">
      <img src="/static/queding.png" alt="" class="h-[41vw] mx-auto">
      <h1 class="h-[17vw] leading-[17vw] text-center text-[4vw] text-[#04090C]">扫描成功</h1>
      <p class="text-[#0F1619] text-[3.4vw] text-center">请在手机上确认登录</p>
    </div>
    <div v-else class="relative">
      <img :src="qrcode" alt="" class="w-[40vw] h-[40vw] m-auto relative z-[1] ">
      <div v-if="code === 800" class="z-[999] absolute h-[40vw] w-[40vw] top-0 left-1/2 transform -translate-x-1/2">
        <div class=" absolute bg-[#DDDDDD] w-[40vw] h-[40vw] opacity-60 z-[2]"></div>
        <div class=" shadow-lg absolute z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF5A35] to-[#F81227] text-[#fff] rounded-[200px] text-center leading-[7.6vw] h-[7.6vw] w-[20vw] text-[3vw]" @click="fn">点击刷新</div>
      </div>
      <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">使用<span class="text-[#2C6AA1] mx-[1.5vw]">网易云音乐APP</span>扫码登录</div>
    </div>


    <div class="fixed bottom-0">
      <img src="/static/bg-login.png" alt="" class="w-[100vw]">
    </div>
  </div>
</template>
<script>
import {checkQrStatus, getQrInfo, getQrKey, getUserAccount, getUserDetail} from '../../request'
import store from "storejs";

export default {
  name:'Login',
  data(){
    return {
      qrcode:'',
      code:0
    }
  },
  methods:{
    async fn(){
      const res = await getQrKey().catch(err=>{console.log(err);})
      const qrinfo = await getQrInfo(res.data.data.unikey).catch(err=>{console.log(err);})
      this.qrcode = qrinfo.data.data.qrimg;
      this.pollingCheck(res.data.data.unikey);
    },
    pollingCheck(key,interval = 1000){
      const timer = setInterval(async ()=>{

        const res = await checkQrStatus(key);
        if(res.data.code === 803){

          store.set('__m__cookie',res.data.cookie);//存cookie

          const user = await getUserAccount();
          console.log('用户详情',user.data);
          store.set('__m__User',user.data);//存用户信息

          const userData = await getUserDetail(user.data.account.id);
          store.set('__m__UserData',userData.data);//存账号信息
          console.log('账号信息',userData.data)
          this.$router.push('/HomeView');

        }
        else if(res.data.code === 802){this.code = 802;}
        else if(res.data.code === 800){
          this.code = 800;clearInterval(timer);

        }
        else {this.code = 801}
        console.log(res.data.code)
      },interval)

      // this.$on('hook',函数)
      //自己监听自己本页面是否结束
      this.$on('hook:beforeDestroy',()=>{clearInterval(timer)});
    },
  },
  async created() {
    const res = await getQrKey().catch(err=>{console.log(err);})
    const qrinfo = await getQrInfo(res.data.data.unikey).catch(err=>{console.log(err);})
    this.pollingCheck(res.data.data.unikey);
    this.qrcode = qrinfo.data.data.qrimg
  },
  //页面销毁前执行的函数
  beforeDestroy() {
    console.log('beforeDestroy');
  }
}
</script>

<style scoped>

</style>