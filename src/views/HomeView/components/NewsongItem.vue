<template>
  <ul>
    <li class='pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]'  v-for='item1 in date.resources' :key='item1.id'>
      <div class='flex'>
        <img :src=item1.uiElement?.image.imageUrl alt='' class='w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5'>
        <div class='flex-1 pt-[2.85vw] ml-[1vw]'>
          <h4 class='dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]'>{{item1.uiElement?.mainTitle?.title}}</h4>
          <p class='dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]'>{{item1.uiElement?.subTitle?.title}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default({
  name: 'NewsongItem',
  props:['date']
});
</script>
<style scoped>

</style>