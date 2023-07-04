<template>
  <div :class='{dark:darkMode}'>
    <router-view/>
  </div>
</template>

<script>
import store from "./store";
export default {
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

