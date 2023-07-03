<template>
  <div class="w-[100vw] overflow-hidden">
    <van-swipe class="rotationChart" :loop="false" :width="slideWidth">
      <van-swipe-item v-for="item in list" :key="item.id" class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw]">
        <!-- 标题开始 -->
        <div class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea] ">
          <span class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]">{{item.name}}</span>
          <div class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]" v-if="true">
            <Icon icon="solar:play-bold" class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw]"/>
            <span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]">播放</span>
          </div>
        </div>
        <!-- 标题结束 -->
        <div class="pr-[2vw]">
          <div v-for="(item1, index) in item.tracks.slice(0,20)" :key="index.id" class="my-[2.7vw] flex items-center h-[8vw]">
            <span class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]" :style="{ color: index<3 ? 'red' : '#858393' }">{{index + 1}}</span>
            <span class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate ">{{ item1.name }}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  props:['list'],
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
  },
  computed: {
    // 轮播图计算宽度
    slideWidth() {
      return `${window.innerWidth * 0.65}`; // 将宽度设置为视窗宽度的80%
    },
  },
};
</script>

<style lang="less">
.text_ff2c41d {
  color: #ff2c41;
}

.text_7d848d {
  color: #7d848d;
}

.rotationChart .van-swipe__indicators {
  display: none;
}
</style>
