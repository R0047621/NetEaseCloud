<template>
  <div>
    <h1  @click="increase">{{ darkMode }}</h1>
<!--    <Dialog title="警告" message="我是提示文本"/>-->
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import store from "../store";

export default {
  computed:{
    darkMode(){
      return store.state.darkMode
    }
  },
  methods:{
    fn(){
      Dialog({title:'警告',message:'我是提示文本'}).then(function(){
        console.log('点击了确定');
      }).catch(function(){
        console.log('点击了取消')
      })
    },
    increase:store.mutations.increase
  },

}
</script>
<style scoped>

</style>