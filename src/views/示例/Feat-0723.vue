<template>
  <div>
    <div class="w-screen h-screen bg-[pink]">
      <h2>top</h2>
      <!--子页面-->
      <router-view/>
      <h2>bottom</h2>
    </div>


  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>
<style scoped>

</style>