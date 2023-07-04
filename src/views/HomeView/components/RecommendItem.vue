<template>
   <div @click=" $router.push(`/SingingListDetails:id=${date.creativeId}`)">
      <div class='w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]'>
         <img :src='date.uiElement?.image.imageUrl' alt='' class='w-[31vw] h-[31vw] rounded-[8px] relative z-[1]'>
         <Icon icon="ion:play" width="10" class='absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw]  z-[2]'/>
         <div class='absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]'>
            <Icon icon="ion:play" width="10" class='text-[#fff] w-[3vw] h-[3vw]' />
            <span class='font-[800] text-[2.5vw]'>{{dataTruncation(date.resources[0].resourceExtInfo.playCount)}}</span>
         </div>
         <div class='dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]'></div>
      </div>
      <p class='dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item'>{{date.uiElement?.mainTitle.title}}</p>
   </div>
</template>
<script>
export default {
   name:"RecommendItem",
   props:['date'],
   methods:{
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
}
</script>
<style scoped>
.shadows{
   box-shadow: 0 0 10px rgba(204, 204, 204, 0.3);
}

</style>