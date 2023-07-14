<template >
    <div class="w-screen h-screen ">
      <div class="flex w-[92vw]  mx-auto" >
          <div class="w-[80vw] overflow-hidden h-[17.61vw] scroll-wrapper " ref="scroll">
              <ul class="flex w-[130vw] h-[17.61vw] text-[#666666]  scroll-content">
                  <li v-for="item in menu" :key="item.id" class="flex items-center text-[3.42vw] font-[800] mx-0 w-[12.8vw] text-center scroll-item" :class="{active:item.name === activeMenuItem}" @click="toggleMenu(item.name)">
                      <span class="w-[12.8vw]  block overflow-hidden whitespace-nowrap text-ellipsis">{{item.name}}</span>
                      <i :class="{line:item.name === activeMenuItem}"></i>
                  </li>
              </ul>
          </div>
          <div class="w-[12vw] flex items-center justify-center">
              <Icon icon="ep:menu" color="gray" width="3.68vw" height="3.68vw" />
          </div>
      </div>
      <ul class="flex flex-wrap justify-between w-[92vw] mx-auto">
        <li v-for="item in playlists" class="w-[28.72vw] h-[44.80vw]" :key="item.id">
            <div class="w-[28.72vw] h-[28.72vw] rounded relative">
                <img :src=item.coverImgUrl class="w-[28.72vw] h-[28.72vw]" alt="">
                <div class="flex items-center h-[4vw] px-[2.4vw] bg-[#585146] text-[#fff] text-[2.2vw] rounded-[12px] absolute right-[1.4vw] top-[1.4vw]" >
                  <Icon icon="ph:triangle" color="white" :rotate="1" class="h-[2.3vw]"/>
                  {{ parseInt(item.playCount / 10000)}} 万
                </div> 
            </div>
            <p class="text-[3vw] leading-[4.5vw] mt-[1.79vw]">{{item.name}}</p>
        </li>
    </ul>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import {fetchPlaylist, fetchPlaylistHot} from '../request/index'
//每一个.vue都是一个组件(带有一定结构，功能，样式的标签) 类似于html标签

export default{
    data() {
    return {
      menu: [],
      playlists: [],
      activeMenuItem: '',
    }
  },
  methods: {
    init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          probeType: 3, // listening scroll event
          click:true
        })
      },
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
  },
  mounted() {
      this.init()
  },
  beforeDestroy() {
      this.bs.destroy()
  },
  async created() {
    const res = await fetchPlaylistHot()
   .then(res => {
        this.menu = res.data.tags;
        return this.activeMenuItem = this.menu[0].name;
      })
      .catch(err => {console.log(err)})
  },
  //监控某个响应数据发生变化之后执行指定的逻辑/动作 (函数)
  // methods. beforeCreate. created, watch 中的this指向vm
  watch:{
    activeMenuItem:{
      // 指定数据变化的回调函数 async异步函数
      async handler(newCat){
        const res = await fetchPlaylist(newCat)
        this.playlists = res.data.playlists;
      },
      //执行配置：立即执行
      immediate:true,
      //监听配置：深度监听 用于监听复杂数据类型(对象，数组)
      deep:true
    },
  },
}
</script>
<style>
.active{
    font-weight: 800;
    color: #333;
    position: relative;
}
.line{
    position: absolute;
    width: 11.8vw;
    height: 1.7vw;
    margin-left: 0.5vw;
    margin-top: 3vw;
    z-index: -1;
    border-radius: 20px;
    background-color: #ff5b55;
}
</style>