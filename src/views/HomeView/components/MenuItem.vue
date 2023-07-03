<template>
  <div>
    <img :src=date.iconUrl alt='' class=' red-image'>
    <p class='dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]'>{{date.name}}</p>
  </div>
</template>
<script>

export default({
  name: 'MenuItem',
  props:['date']
});
</script>



<style scoped>

</style>