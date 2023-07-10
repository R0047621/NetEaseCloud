<template>
  <div class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center">
    <div class="w-[10vw] h-[10vw] relative flex items-center justify-center">
      <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
      <img :src="Player._currentTrack?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]" >
    </div>
    <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
      <span class="text-[#3E485E]">{{Player._currentTrack.name}}</span>
      <span class="text-[#7B8591]">-{{Player._currentTrack.name}}</span>
    </div>
    <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" @click="playFn">
      <van-circle v-model="currentRate" :rate="10" :speed="100"  size="5.6vw" :stroke-width="120" color="#475165" layer-color="#C7CBD2"/>
      <Icon :icon="`${!play?'carbon:pause-filled':'ph:play-fill'}`" width="11px" class="top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] absolute "/>
    </div>
    <!-- 播放列表 -->
    <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#3b4152] ml-[4.5vw]"/>


  </div>
</template>

<script>
import Player from "./player.js";
export default {
  data() {
    return {
      Player:new Player(),
      currentRate: 0,
      play:window.$player?._playing,
    };
  },
  methods:{
    playFn(){
      this.play = !this.play
      window.$player.playOrPause();
    }
  },
  created() {
    window.$player = this.Player;
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
};
</script>

<style scoped>
</style>