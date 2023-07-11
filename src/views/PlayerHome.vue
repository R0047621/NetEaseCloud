<template>
  <div class=" relative h-[100vh]">
    <div class="absolute z-[3]">
      <!--头部-->
      <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
        <Icon icon="ep:arrow-up-bold" class='dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff]' :rotate=2 @click.native="$router.go(-1)"/>
        <div class="text-center">
          <p class="h-[4vw] text-[4vw] text-[#fff] ">{{$player._currentTrack.name}}</p>
          <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
           {{$player._currentTrack?.ar[0].name}}
            <span class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">关注</span>
          </p>
        </div>
        <Icon icon="carbon:share" class="text-[6vw] text-[#fff]"/>
      </div>

      <div class="relative top-[10%] w-[100vw] h-[120vw]">
        <div class="absolute top-[10%] left-[50%] translate-x-[-50%]  z-[10] rotated w-[40vw] h-[50vw]" :style="!$player._playing ? `transform:rotate(-45deg)`:`transform:rotate(-10deg)`">
          <img src="/static/needle-ab.png" alt="" class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]">
        </div>
        <!-- 唱片-->
        <div class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]">
          <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="w-[80vw] h-[80vw]">
          <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[50vw] h-[50vw] absolute top-1/2 left-1/2  rounded-[50%] border-[5px] border-[#000] rotateAnimation1" :class="{ 'paused-animation': !this?.$player?._playing }">
        </div>
      </div>

      <div class='w-[100vw] fixed bottom-[30vw] flex justify-evenly items-center'>
        <div @click="love  = !love">
          <Icon icon="ant-design:heart-filled" v-if="love" class="text-[#FE3C3A] text-[6vw]"/>
          <Icon icon="ant-design:heart-outlined" class="text-[6vw] text-[#fff]" v-else/>
        </div>
        <Icon icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload" class="text-[5vw] text-[#fff] " />
        <Icon icon="carbon:user-multiple" class="text-[5vw] text-[#fff]"/>
        <Icon icon="uil:comment-message" class="text-[6vw] text-[#fff]"/>
        <Icon icon="ri:more-2-line" class="text-[6vw] text-[#fff]"/>
      </div>
      <div class=" h-[12.3vw] flex fixed bottom-[7.5vw] w-[100vw] items-center justify-evenly">
        <div v-if="false">
          <Icon icon="icon-park-outline:loop-once" v-if="false" />
          <span v-else-if="false"></span>
        </div>
        <Icon icon="ps:random" v-if="true" class="text-[#fff]"/>
        <!--上一曲-->
        <Icon icon="fluent:previous-16-filled" class="text-[#fff]" @click.native="$player._getNextTrack()"/>
        <div class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center">
          <Icon :icon="`${$player._playing?'carbon:pause-filled':'ph:play-fill'}`" width="20px" @click.native="playFn" />
        </div>
        <!--下一曲-->
        <Icon icon="fluent:next-20-filled" class="text-[#fff]" @click.native="$player._nextTrackCallback()"/>
        <Icon icon="iconamoon:playlist-fill" class="text-[6vw]  text-[#fff]"/>
      </div>
    </div>


    <div class="element fixed   z-[1] top-0 left-0 right-0 bottom-0" :style="`background-image: url(${$player._currentTrack?.al?.picUrl})`"></div>
    <div class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      love:false,
    }
  },
  methods: {
    playFn() {
      this.$player.playOrPause();
    },

  },
}
</script>

<style scoped>
.rotateAnimation1 {
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform:translateX(-50%) translateY(-50%) rotate(0deg);
  }
  to {
    transform:translateX(-50%) translateY(-50%)  rotate(360deg);
  }
}
.paused-animation {
  animation-play-state: paused;
}
.element {
  background-size: 100% 100%;
  filter: blur(24px);
}
.bgColor{
  background-color:rgba(0,0,0,0.5);
}
.rotated {
  transition: all 1s;
  transform-origin: left top;
}
</style>