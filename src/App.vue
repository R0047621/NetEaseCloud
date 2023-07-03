<template>
  <div :class='{dark:false}'>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  created() {}
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

