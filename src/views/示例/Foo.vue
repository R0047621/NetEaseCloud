<!--<template>-->
<!--  <div>-->
<!--    <button @click="fn">按钮</button>-->
<!--  </div>-->
<!--</template>-->

<script>


export default {
  render(createElement) {
    // return createElement('div',
    //     {},
    //     [
    //       createElement('h1',{on:{click:this.fn}},[this.cont]),
    //       createElement(),
    //       createElement()
    //     ]
    // )
    //jsx 元素 是js的一种新的数据类型
    return (
      <div>
        <h1 onClick={this.fn}>{this.cont}</h1>
        <ul>
          {}
        </ul>
      </div>
    )


  },
  data(){
    return {
      cont:123,
      arr:[1,2,3,4]
    }
  },
  methods:{
    fn(){
      console.log(1123)
    }
  },

}
</script>
<style scoped>

</style>