<template>
  <div v-if="visible">
    <div class='fixed top-0 left-0 right-0 bottom-0 bg-[#000] opacity-50 z-[998]'></div>
<!--    <div class="  w-[320px] fixed top-[50%] left-[50%] z-[999] text-[16px] rounded-[12px] bg-[#D2D4DA] translate-x-[-50%] translate-y-[-40%]">-->
<!--      <div class="pt-[26px] font-medium leading-[24px] text-center">{{ title }}</div>-->
<!--      <div>-->
<!--        <div class="pt-[8px] text-[#646566] py-[26px] px-[24px] text-center text-[14px]">{{message}}</div>-->
<!--      </div>-->
<!--      <div  class="flex text-center h-[48px] items-center border-t border-[#ebedf0] cursor-pointer">-->
<!--        <div class="flex-1 border-r border-[#ebedf0] leading-[48px]">-->
<!--          <span class="" @click="cancel">取消</span>-->
<!--        </div>-->
<!--        <div class="flex-1 text-[red]">-->
<!--          <span @click="confirm">确认</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="fixed h-[27vw] w-[87vw] top-[50%] left-[50%] z-[999] text-[16px] rounded-[12px] bg-[#fff] translate-x-[-50%] translate-y-[-40%]">
      <div class="h-[14vw] pl-[5vw] text-[3vw] text-[#999] leading-[14vw]">{{message}}</div>
      <div class="h-[13vw] items-center flex justify-end text-[#FF3A38] text-[3vw]">
        <div class="w-[20vw] text-center" @click="cancel">取消</div>
        <div class="w-[20vw] text-center" @click="confirm">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'dialog',
  data(){
    return {
      visible:false,
    }
  },
  methods:{
    hide(){
      this.visible = false
    },
    cancel(){
      this.hide();
      this.reject();
    },
    confirm(){
      this.hide();
      this.resolve()
    }
  }
  // props:{
  //   title:{
  //     type:String
  //   },
  //   message:{
  //     type:String,
  //     required:true
  //   }
  // }
}
</script>

<style scoped>

</style>