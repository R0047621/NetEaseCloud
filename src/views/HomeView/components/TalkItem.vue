<template>
  <div>
    <h4 class=' text-[4vw] text-[#fff] flex items-center' ><Icon icon="raphael:bubble" width='4vw' height='4vw' color='#fff'/>{{date.user.nickname}}</h4>
    <p class='text-[2.6vw] text-[#D7D7D7]'>484万热度</p>
    <p class='text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden' >{{date.user.signature}}</p>
    <img :src='date.user.avatarUrl' alt='' class='w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]'>
  </div>
</template>
<script >
export default {
  props:['date']
}
</script>



<style scoped>

</style>