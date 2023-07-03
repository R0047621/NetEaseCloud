<template>
  <ul class='ml-[2vw]'>
    <li class='pl-[2vw] w-[88vw] scroll-content pr-[5vw]'>
      <div class='flex justify-between items-center h-[12vw]'>
        <div class='flex  items-center'>
          <span class='dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]'>{{ date.uiElement?.mainTitle.title }}</span>
          <Icon icon="mingcute:right-line"  class='dark:text-[#e6e6e9] font-[800] text-[#3d475b]'/>
        </div>
        <span class='dark:text-[#8e9097] text-[#939BA1]'>{{date.uiElement?.mainTitle.titleDesc}}</span>
      </div>
    </li>
    <li class='pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]'  v-for='(item1,index) in date.resources' :key='item1.id'>
      <div class='flex'>
        <img :src=item1.uiElement.image.imageUrl alt='' class='w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5'>
        <div class='flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]'>
          <div class='leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]' v-if='index === 0'>{{index + 1}}</div>
          <div class='leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]' v-else-if='index === 1'>{{index + 1}}</div>
          <div class='leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]' v-else>{{index + 1}}</div>
          <div class=' w-[40vw]'>
            <h4 class='dark:text-[#ebeaf0]  text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap  w-[40vw]'>{{item1.uiElement.mainTitle?.title}}</h4>
            <p class='dark:text-[#a5a7ae]  text-[2.36vw] text-[#79838F]'>{{item1.resourceExtInfo?.artists[0].name}}</p>
          </div>
          <div class='leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]'>
            <span class='text-[#39B184]' v-if='item1.uiElement.labelText.text === "新晋"'>{{ item1.uiElement.labelText.text }}</span>
            <span class='text-[#FF3836]' v-else>{{ item1.uiElement.labelText.text }}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default({
  name: 'RankingItem',
  props:['date']
});
</script>



<style scoped>

</style>