<template>
  <div class='dark:border-[#2d2f36]  w-[100vw] px-[4vw] border-t-[1px] border-[#EBEDF2]' v-if='date !== "推荐歌单"'>
    <div class='flex justify-between items-center h-[12vw]'>
      <div class='flex  items-center'>
        <span class='dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]' >{{date}}</span>
        <Icon icon="mingcute:right-line" class='dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw]' />
      </div>
      <Icon icon="ri:more-2-line"  class='dark:text-[#e9ebf2]  text-[#3d475b] w-[4vw]  h-[6vw]'  height="8" @click.native='drawerVisible = !drawerVisible'/>
    </div>
     <Drawer :visible.sync="drawerVisible" direction='btt'>
        <template #header>
           <div class="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw] ">
              <p class="text-[3vw] text-[#939BA1] font-[800]">{{ date }}</p>
              <Icon @click.native="drawerVisible = !drawerVisible" icon="ic:outline-close"  class="dark:text-[#C0C0C0] dark:bg-[#2F2F2F] text-[#696d73] w-[6vw] h-[6vw] rounded-[50%] bg-[#f2f2f3]"/>
           </div>
        </template>
        <div class='ml-[5vw]'>
           <div class="h-[12vw] flex items-center">
              <Icon icon="iconamoon:like-light" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
              <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">优先推荐</p>
           </div>
           <div class="h-[12vw] flex items-center">
              <Icon icon="basil:heart-off-outline" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
              <p class="dark:text-[#fff] h-[4vw] text-[3vw] text-[#3a393f]">减少推荐</p>
           </div>
           <div class="h-[12vw] flex items-center">
              <Icon icon="icon-park-outline:more-two" :rotate="1" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
              <p class="dark:text-[#fff] h-[5vw] text-[3vw] text-[#3a393f]">更多内容</p>
           </div>
        </div>
     </Drawer>
  </div>
   <div class='w-[100vw] px-[4vw] dark:text-[#e9ebf2]' v-else>
      <div class='flex justify-between items-center h-[12vw]'>
         <div class='flex  items-center'>
            <span class='dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]'>{{date}}</span>
            <Icon icon="mingcute:right-line" class='dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw]' />
         </div>
         <Icon icon="ri:more-2-line" class='dark:text-[#e9ebf2]  text-[#3d475b]  w-[4vw]  h-[6vw]'  height="8" @click.native='drawerVisible = !drawerVisible'/>
      </div>
      <Drawer :visible.sync="drawerVisible" direction='btt'>
         <template #header>
            <div class="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw] ">
               <p class="text-[3vw] text-[#939BA1] font-[800]">{{ date }}</p>
               <Icon @click.native="drawerVisible = !drawerVisible" icon="ic:outline-close"  class="dark:text-[#C0C0C0] dark:bg-[#2F2F2F] text-[#696d73] w-[6vw] h-[6vw] rounded-[50%] bg-[#f2f2f3]"/>
            </div>
         </template>
         <div class='ml-[5vw]'>
            <div class="h-[12vw] flex items-center">
               <Icon icon="iconamoon:like-light" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
               <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">优先推荐</p>
            </div>
            <div class="h-[12vw] flex items-center">
               <Icon icon="basil:heart-off-outline" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
               <p class="dark:text-[#fff] h-[4vw] text-[3vw] text-[#3a393f]">减少推荐</p>
            </div>
            <div class="h-[12vw] flex items-center">
               <Icon icon="icon-park-outline:more-two" :rotate="1" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
               <p class="dark:text-[#fff] h-[5vw] text-[3vw] text-[#3a393f]">更多内容</p>
            </div>
         </div>
      </Drawer>
   </div>
</template>
<script>
export default({
   name: 'TitleItem',
   props:['date'],
   data(){
     return {
        drawerVisible:false,
     }
   }
});
</script>

<style scoped>

</style>