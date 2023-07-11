<template>
  <div :class='{dark:darkMode}'>
    <router-view/>
    <Player v-if="showPlayer" class="fixed bottom-0 bg-[#fff] z-[30]"/>
    <!--播放器-->
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
      return this.$route.path !== '/PlayerHome';
    },
  },
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

