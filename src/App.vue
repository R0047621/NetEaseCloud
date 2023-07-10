<template>
  <div :class='{dark:darkMode}'>
    <router-view/>
    <Player class="fixed bottom-0 bg-[#fff] z-[30]"/>
    <!--播放器-->
  </div>
</template>

<script>
import store from "./store";
import Player from "./components/Player/Player.vue";
export default {
  components:{Player},
  computed:{
    darkMode(){
      return store.state.darkMode
    }
  },
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

