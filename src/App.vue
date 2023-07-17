<template>
  <div :class='{dark:darkMode}'>
    <transition name="rotate" >
      <router-view :class="showMenu && showPlayer ? 'pb-[24vw]' : 'pb-[12vw]'"/>
    </transition>
    <!--播放器-->
    <Player  v-if="$player.list === undefined ? false : showPlayer" class="fixed bottom-0 bg-[#fff] z-[10]" :class="showMenu ? 'bottom-[12vw]' : 'bottom-0'"/>
    <!--菜单-->
    <!-- 菜单 -->
    <van-tabbar route v-if="showMenu" class="bg-[#fff] fixed z-[3]">
      <!-- 首页 -->
        <van-tabbar-item replace to="/HomeView">首页<template #icon><Icon icon="ri:netease-cloud-music-fill" /></template></van-tabbar-item>
        <!-- 排行榜 -->
        <van-tabbar-item replace to="/Mv">排行榜<template #icon><Icon icon="ion:podium-sharp" /></template></van-tabbar-item>
        <!-- 我的 -->
        <van-tabbar-item replace to="/Information">我的<template #icon><Icon icon="mingcute:music-line" /></template></van-tabbar-item>
        <!-- 关注 -->
        <van-tabbar-item replace to="">关注<template #icon><Icon icon="iconoir:user-love" /></template></van-tabbar-item>
        <!-- 社区 -->
        <van-tabbar-item replace to="">社区<template #icon><Icon icon="ph:wechat-logo" /></template></van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import store from "./store";

export default {
  computed:{
    darkMode(){
      return store.state.darkMode
    },
    showPlayer() {
      // 在这里根据你的逻辑判断是否在当前页面显示播放器组件

      return !(this.$route.path === '/edit' ||
          this.$route.path === '/PlayerHome' ||
          this.$route.path.slice(0, 16) === '/videoPlayerView');

    },
    showMenu() {
      return this.$route.path === '/HomeView' || this.$route.path === '/Information' || this.$route.path === '/Mv';
    },
  },
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.rotate-enter,.rotate-leave-to{
  height: 0;
  opacity: 0;
  overflow: hidden;
}
.rotate-active,.rotate-leave-active{
  transition: all  .5s;
}
.rotate-enter-to,.rotate-leave{
  height: 100vh;
  opacity: 1;
}/* 修改高度 */
.van-hairline--top-bottom {
  height: 12vw;
}

.van-tabbar-item {
  color: #9297a1;
}

.van-tabbar-item--active {
  color: #eb4954;
}

</style>

