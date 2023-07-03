<template>
 <div @click='clickHander'>
   <div class='bg-black opacity-40 fixed top-0 left-0 bottom-0 right-0 z-[10]' ref='drawerMask' v-if='visible'></div>
   <transition :name='direction'>
     <div class='dark:bg-[#272727] bg-[#fff] fixed z-[11]' v-show='visible' :style='drawerContentStyle'>
       <div>
         <slot name='header'>
           <div class='flex justify-between items-center'>
             <p class='dark:text-[#7D7D7D] text-[939BA1]'>{{ title }}</p>
             <Icon icon="clarity:times-line" @click.native='closeDrawer'/>
           </div>
         </slot>
       </div>
       <div>
         <slot>default slot default value </slot>
       </div>
     </div>
   </transition>
 </div>
</template>
<script>
export default({
  //单向数据流(父级通过props传递始子組件的数据子組件没有权利修改)
  name: 'Drawer',
  //计算属性
  computed:{
    drawerContentStyle(){
      if(this.direction === 'btt'){
        return { width:'100vw', left:0, bottom:0, 'border-top-left-radius':'15px','border-top-right-radius':'15px'}
      } else if(this.direction === 'ttb'){
        return { width:'100vw', left:0, top:0}
      } else if(this.direction === 'ltr') {
        return { height: '100vh', left: 0, top: 0}
      }else if(this.direction === 'rtl'){
          return { height:'100vh', right: 0, top:0 }
      }
    }
  },
  props:{
    visible:{
      type:Boolean,
      required:true
    },
    title:{
      type:String,
      default:'默认标题'
    },
    direction:{
      type:String,
      default: 'btt',
      validator(direction){
        return ['ttb','btt','ltr','rtl'].includes(direction)
      }
    },
    width:{
      type:[Number,String],
      default:'80%'
    }
  },
  methods:{
    closeDrawer(){
      this.$emit('update:visible',false);
    },
    clickHander(e){
      if(e.target === this.$refs.drawerMask){
        //使用vm.$emit给父组件传递数据
        this.$emit('update:visible',false)
        this.closeDrawer();
      }
    }
  }
});
</script>
<style scoped>
.btt-enter,.btt-leave-to{
  transform: translateY(100%);
}
.btt-enter-active,.btt-leave-active{
  transition: all ease-in-out 0.5s;
}
.btt-enter-to,.btt-leave{
  transform: translateY(0);
}

.ttb-enter,.ttb-leave-to{
  transform: translateY(-100%);
}
.ttb-enter-active,.ttb-leave-active{
  transition: all ease-in-out 0.5s;
}
.ttb-enter-to,.ttb-leave{
  transform: translateY(0);
}


.ltr-enter,.ltr-leave-to{
  transform: translateX(-100%);
}
.ltr-enter-active,.ltr-leave-active{
  transition: all ease-in-out 0.5s;
}
.ltr-enter-to,.ltr-leave{
  transform: translateX(0);
}



.rtl-enter,.rtl-leave-to{
  transform: translateX(100%);
}
.rtl-enter-active,.rtl-leave-active{
  transition: all ease-in-out 0.5s;
}
.rtl-enter-to,.rtl-leave{
  transform: translateX(0);
}

</style>