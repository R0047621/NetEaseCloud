import Vue from 'vue'
import Dialog from './Dialog.vue'
console.log(Dialog);
//创建一个Dialog配置项的vue子类
export default function (option){
   return new Promise(function(resolve,reject){
       const VueDialog = Vue.extend(Dialog);
       const instanceDialog = new VueDialog({
           data(){
               return {
                   title:option.title,
                   message:option.message,
                   visible:true,
               }
           },
           methods:{resolve,reject}
       });
       instanceDialog.$mount();
       document.querySelector('body').appendChild(instanceDialog.$el);
   })
}