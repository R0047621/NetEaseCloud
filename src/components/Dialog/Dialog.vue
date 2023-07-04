<template>
  <div v-if="visible" class="w-[320px] fixed top-[50%] left-[50%]  text-[16px] rounded-[12px] bg-[#D2D4DA] translate-x-[-50%] translate-y-[-40%]">
    <div class="pt-[26px] font-medium leading-[24px] text-center">{{ title }}</div>
    <div>
      <div class="pt-[8px] text-[#646566] py-[26px] px-[24px] text-center text-[14px]">{{message}}</div>
    </div>
    <div  class="flex text-center h-[48px] items-center border-t border-[#ebedf0] cursor-pointer">
      <div class="flex-1 border-r border-[#ebedf0] leading-[48px]">
        <span class="" @click="cancel">取消</span>
      </div>
      <div class="flex-1 text-[red]">
        <span @click="confirm">确认</span>
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