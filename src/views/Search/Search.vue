<template>
  <div class=" bg-[#F4F4F4] dark:bg-[#1a1c23] h-[100vh] overflow-auto">
    <div class="pb-[5vw]">
      <!-- 搜索框 -->
      <div class="w-[91vw] h-[20vw] mx-auto flex justify-between items-center">
        <!-- 返回图标 -->
        <Icon class="text-[#000] dark:text-[#e9e9e9]" icon="ph:arrow-left-light" width="8vw" @click.native="$router.push('/HomeView')"/>
        <!-- 搜索框 -->
        <div class="relative">
          <label for="">
            <input v-model="valuedata" :placeholder="placeholder" class="dark:border-2 dark:border-[#31333a] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[3vw] pl-[11vw] bg-white opacity-0.2 text-[#9b9b9b] w-[72vw] h-[10vw] border-2 border-[#fff] rounded-[25px] " type="text"/>
          </label>
          <Icon class="absolute left-[3.68vw] top-[3vw] text-[#000] dark:text-[#e9e9e9]" color="#6f778f" height="4.3vw" icon="tabler:search" width="4.3vw" @click.native="searchHandler"/>
          <Icon v-if="valuedata.length !== 0" class="absolute right-[3.68vw] top-[3vw] text-[#000] dark:text-[#e9e9e9]" color="#6f778f" height="4.3vw" icon="ph:x" width="4.3vw" @click.native="valuedata = ''"/>
        </div>
        <div class="font-semibold text-[3.7vw] dark:text-[#e9e9e9] text-[#283349]" @click="searchHandler">搜索</div>
      </div>
      <div v-if="valuedata.length === 0">
        <!-- 导航栏 -->
        <div class="flex justify-around mt-[3vw]">
          <div v-for="(item,index) in menu" :key="item.id" :class="{ 'border-r-[0.4vw]': index < 3 }"  class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA]">
            <Icon :icon="item.icon" color="red" width="5vw" @click.native='$router.push(item.url)'/>
            <p class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]">{{ item.text }}</p>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="mt-[5vw]">
          <div class="flex justify-between px-[3vw]">
            <h1 class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]">猜你喜欢</h1>
            <Icon color="#acafae" icon="ic:baseline-refresh" width="5vw" @click.native="rotateItems"/>
          </div>
          <div class="flex px-[3vw] flex-wrap">
            <div v-for="item in displayedItems" :key="item.id" class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">{{ item.searchWord}}</div>
          </div>
        </div>
        <HorizontalSlidingList :list="list"  class="mt-[5vw]"/>
      </div>
      <div v-else >
        <div v-for="item in search" class="h-[12vw] ml-[3.6vw] flex items-center">
          <Icon class="text-[#000] dark:text-[#e9e9e9]" color="#6f778f" height="4.3vw" icon="tabler:search" width="4.3vw"/>
          <div class="dark:border-[#282a31] dark:text-[#e7e7e8] border-b-[2px] text-[3.5vw] w-[93vw] h-[12vw] leading-[12vw] ml-[1.8vw] ">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import {playlist, fetchSearchDefault, fetchSearchResult, detail} from '../../request'
import HorizontalSlidingList from "./components/HorizontalSlidingList.vue";
import _ from 'lodash'
export default {
  components:{HorizontalSlidingList},
  data(){
    return {
      menu: [
        {icon: 'octicon:person-fill-24', text: '歌手',url:'/Singer'},
        {icon: 'clarity:book-solid', text: '曲风',url:'/Genre'},
        {icon: 'fluent-emoji-high-contrast:musical-notes', text: '专区', url:'/Zone'},
        {icon: 'ph:microphone-fill', text: '识曲',},
      ],
      like: '',//猜你喜欢
      displayedItems:[],//渲染5条
      placeholder:'',//默认搜索
      valuedata:'',
      list:[],//榜单
      search:[],//搜索数据
    }
  },
  watch:{
    valuedata:_.debounce(async function (keywords) {
        if(this.valuedata.length !== 0){
          const res = await fetchSearchResult({keywords:keywords});
          this.search = res.data.result.songs.slice(0,10);
        }
    },200)
  },
  methods:{
    rotateItems() {
      this.like.push(...this.like.splice(0, 5));
      this.displayedItems = this.like.slice(0, 5);
    },
    async searchHandler() {
      if(this.valuedata.length !== 0){
        const res2 = await fetchSearchResult({
          keywords: this.valuedata || this.placeholder,
        });
        this.search = res2.data.result.songs.slice(0,10);
        console.log(this.search);
      }
    },
  },
  async created(){
    const res1 = await fetchSearchDefault();
    this.placeholder = res1.data.data.showKeyword;//默认搜索
    this.list = (await playlist()).slice(0,10);//榜单
    this.like = (await detail()).data.data;//猜你喜欢
    this.displayedItems.push(...this.like.slice(0, 5));//首次渲染五条
  }
}
</script>


<style >

</style>