<template>
  <div>
    <div class='w-[31vw] h-[31vw] border-[1px] overflow-hidden relative'>
      <transition name='abc'  v-for=" (item,index) in data" :key="$slots.item" class="swiper-slide">
        <div class='w-[31vw] h-[31vw] bg-orange-600 absolute top-0 left-0' v-if='visible === index' >
          <img :src='item.uiElement.image.imageUrl' alt='' class='w-[31vw] h-[31vw] rounded-[8px]'>
          <Icon icon="ion:play" width="10" class='absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw]'/>
          <div class='absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center'>
            <Icon icon="ion:play" width="10" class='text-[#fff] w-[3vw] h-[3vw]' />
            <span class='font-[800] text-[2.5vw]'>{{dataTruncation(item?.resourceExtInfo.playCount)}}</span>
          </div>
        </div>
      </transition>

    </div>
    <div>{{ date1 }}</div>
  </div>

</template>

<script>

export default({
  name: 'Banner',
  props:['data'],
  data(){
    return {
      visible:1,
    }
  },
  mounted(){
    this.animateItems()
  },
  methods:{
    animateItems() {
      setInterval(() => {
        this.visible++;
        if(this.visible > 2){
          this.visible = 1;
        }

      }, 3000);
    },
  }
});
</script>

<style scoped>
.abc-enter{
  opacity: 0;
  transform: translateY(100%) scale(.7);
}
.abc-enter-active{
  transition: all ease-in-out 1s;
}
.abc-enter-to{
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave{
  transform: translateY(0) scale(1);
}
.abc-leave-active{
  transition: all ease-in-out 1s;
}
.abc-leave-to{
  transform: translateY(-100%) scale(.7);
}

</style>