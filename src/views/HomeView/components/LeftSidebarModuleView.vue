<template>
  <div class='dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]'>
    <div v-if='item.title' class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">{{ item.title }}</div>
    <div class="px-[4vw]">
      <div v-for='item1 in item.data' :key='item1.id' class="flex items-center justify-between h-[12vw] px-[3.6vw]"  >
        <div class="flex items-center">
          <Icon :icon="item1.icon" class='dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]' />
          <span class="dark:text-[#f0f0f0]  text-[color:#333333] text-[3.5vw] ml-[2.73vw]">{{item1.name}}</span>
        </div>
        <div class="flex items-center">
          <span v-if='item1.rigth' class="text-[color:#a7a7a7] text-[3vw]">{{item1.rigth}}</span>
          <Icon v-if='!item1?.btn' class='font-[800] w-[6vw] h-[6vw]' color="#b5b5b5" icon="mingcute:right-line"/>
          <div v-if='item1?.btn' class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
             <div class="switch">
                <input id="toggle" :checked='!darkMode' type="checkbox" @click='increase'>
                <label for="toggle"></label>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store";
export default {
  props: ['item'],
  computed:{
    darkMode(){
      return store.state.darkMode
    }
  },
   methods: {
     increase:store.mutations.increase
   }
};
</script>
<style>
/* 设置开关容器样式 */
.switch {
   position: relative;
   /* 相对定位，用于内部元素绝对定位的基准 */
   display: inline-block;
   /* 行内块级元素，可以和其他元素水平排列 */
   width: 10vw;
   /* 宽度 */
   height: 5vw;
   /* 高度 */
}

/* 隐藏复选框样式 */
.switch input {
   opacity: 0;
   /* 不透明度为0，即隐藏 */
   width: 0;
   /* 宽度为0，既不占据空间 */
   height: 0;
   /* 高度为0 */
}

/* 开关标签样式 */
.switch label {
   position: absolute;
   /* 绝对定位，根据开关容器进行定位 */
   top: -1vw;
   /* 到开关容器顶部距离为0 */
   left: 0;
   /* 到开关容器左侧距离为0 */
   right: 0;
   /* 到开关容器右侧距离为0 */
   bottom: 0;
   /* 到开关容器底部距离为0 */
   background-color: #f93b38;
   /* 背景颜色变为蓝色 */
   border-radius: 34px;
   /* 圆角半径为开关容器高度的一半，使其呈现圆形 */
   cursor: pointer;
   /* 鼠标指针样式为手型，表示可点击 */
   transition: background-color 0.2s ease-in-out;
   /* 颜色过渡效果，耗时0.2秒 */
}

/* 开关按钮样式 */
.switch label::before {
   content: "";
   /* 伪元素，用作开关按钮 */
   position: absolute;
   /* 绝对定位，根据开关标签进行定位 */
   width: 6vw;
   /* 宽度为固定值 */
   height: 6vw;
   /* 高度为固定值 */
   border-radius: 50%;
   /* 圆角半径为宽度和高度的一半，使其呈现圆形 */
   background-color: white;
   /* 背景颜色白色 */
   top: 0;
   /* 到标签顶部距离为4像素 */
   left: 0;
   /* 到标签左侧距离为4像素 */
   transition: transform 0.2s ease-in-out;
   /* 平移过渡效果，耗时0.2秒 */

   transform: translateX(4vw);
   /* 平移动画效果，向右平移26像素 */
}

/* 复选框被选中时的样式 */
.switch input:checked+label {
   background-color: #ccc;
   /* 背景颜色灰色 */
}

/* 复选框被选中时，开关按钮的位置变化 */
.switch input:checked+label::before {
   transform: translateX(0px);
}








</style>
