<template>
  <div>
    <div class=" bg-gradient-to-br from-[#486D8D] to-[#6186AB] h-[70vw] pl-[3.9vw] pr-[3.4vw]">
      <!--头部-->
      <nav class="h-[13.5vw] flex items-center justify-between">
        <div class="flex items-center">
          <Icon icon="ph:arrow-left"  class="text-[7vw] text-[#fff]" @click.native="$router.push(`/HomeView`)"/>
          <div class="text-[4.2vw] text-[#fff] ml-[4.7vw]">歌单</div>
        </div>
        <div class="flex items-center">
          <Icon icon="grommet-icons:form-search" class="text-[7vw] text-[#fff] mr-[5vw]"/>
          <Icon icon="ri:more-2-line"  class="text-[7vw] text-[#fff]"/>
        </div>
      </nav>
      <!--内容-->
      <section class="h-[29vw] flex pt-[2.6vw]  justify-between">
        <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
          <img :src="title.coverImgUrl" alt="" class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]">
          <div class="w-[20vw] h-[10vw] bg-[#6181A0] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
        </div>
        <div class="w-[55vw]">
          <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800] ">{{ title.name }}</p>
          <div class="h-[10.5vw] flex items-center">
            <img :src="title.creator.avatarUrl" alt="" class="w-[6vw] h-[6vw] rounded-[50%]">
            <span class="text-[2.73vw] text-[#AEC5E2] ml-[2vw] mr-[1.5vw]">{{title.gradeStatus}}</span>
            <span class="px-[2vw]  py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#D8E4F5] bg-[#6385A3] flex items-center pr-[3.5vw]">
                 <Icon icon="material-symbols:add" color="#D8E4F5" class="text-[4vw]"/>关注
            </span>
          </div>
          <div class="flex">
            <div class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-[#7392AE] text-[#fff] rounded-[4px] mr-[1.4vw]" v-for="item in title.tags">
              <span class="text-[2.2vw]">{{item}}</span>
              <Icon icon="ep:arrow-up-bold" color="white" :rotate="1" class="text-[3vw] ml-[0.6vw]"/>
            </div>
          </div>
        </div>
        <div class="w-[8vw] h-[8vw] rounded-[50%] bg-[#6183A1] flex items-center justify-center">
          <Icon icon="ep:arrow-up-bold" color="white" :rotate="2" class="text-[3.5vw]"/>
        </div>
      </section>
      <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw]  justify-between">
        <span class="text-[#B8CDE3] text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{title.description}}</span>
        <Icon icon="ep:arrow-up-bold" color="#D8E4F5" :rotate="1" class="text-[3vw]"/>
      </p>
      <div class="flex items-center mt-[3.5vw]">
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#7d9ab7] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="majesticons:share" color="white" class="text-[5vw] mr-[1.8vw]"/>4152
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#7d9ab7] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
          <Icon icon="ant-design:message-filled" color="white" class="text-[5vw] mr-[1.8vw]"/>1762
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="mdi:favorite-add" color="white" class="text-[5vw] mr-[1.8vw]"/>39.7万
        </div>
      </div>
    </div>
    <div class="bg-[#fff] rounded-[15px] mt-[-2.5vw] px-[3.8vw]">
      <!--头部-->
      <nav class="a1 h-[13vw] flex items-center  justify-between">
        <div class="flex items-center">
          <Icon icon="heroicons-solid:play" class="text-[#ED3E20] text-[8vw]"/>
          <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
          <span class="text-[#8C9094] text-[2.7vw]">(122)</span>
        </div>
        <div class="flex items-center">
          <Icon icon="clarity:download-line" class="text-[5vw] text-[#2C3034]"/>
          <Icon icon="solar:list-check-bold" class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw]" />
        </div>
      </nav>
      <div>
        <div class="flex items-center h-[14vw]" v-for="(item, index) in data" :key="item.id">
          <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{ index + 1 }}</div>
          <div class="font-medium text-[3.6vw] w-[64vw]">
            <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
              <span class="text-ellipsis text-[#000]">{{item.name}}</span>
              <span class="text-[#949797]">{{ item.al.name }}</span>
            </div>
            <div>
              <span class="text-[#808080] text-[2.8vw]">{{item.ar[0].name}}</span>
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
import {playlistDetail,playlistTrackAll} from '../../repuest'
export default {
  data(){
    return {
      title:[],//头部
      data:[],//歌曲
    }
  },
  async created(){
    this.data = await playlistTrackAll(this.$route.params.id.replace(':id=',''))
    this.title = await playlistDetail(this.$route.params.id.replace(':id=',''))
    console.log('歌曲',this.data = this.data.data.songs);
    console.log('头部',this.title = this.title.data.playlist);
  }
}
</script>


<style scoped>
 .a1 {
   position: sticky;
   top: 0;
   z-index: 999;
   background-color: white;
 }
</style>