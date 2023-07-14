import styled from "styled-components-vue";
import store from "storejs";
import {areaList} from "@vant/area-data";
import {featNicknameCheck, fetchUserUpdata} from '../../request'
import _ from 'lodash';

const Wrapper = styled.div`
  .van-cell-group{
    ::after{
      display: none;
    
    }
    >div{
      //border-bottom: 1px solid #373737;
      border: none;
    } 
    
    div:last-child{border: none;}
  } 
  .van-cell__title{font-size: 3.6vw;} 
  .van-cell__value{color:#999999;font-size:3vw;font-weight: 200;} 
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{border-width: 0 !important;}
`
export default {
    render(){
        return (
            <div class='dark:bg-[#151515] h-[100vh]'>
                <Wrapper>
                    {/*头部*/}
                    <div class="dark:bg-[#2C2C2C] flex  w-[100%]  items-center h-[14vw] bg-[#FFFFFF] pl-[4vw]">
                        <Icon icon="simple-line-icons:arrow-left" class="dark:text-[#FFFFFF] mr-[4vw] text-[4vw] text-[#333333]" nativeOnClick={() => {this.$router.push('/Information');}}/>
                        <div class="dark:text-[#f3f3f4]  flex items-center justify-center text-[#2a3146]  text-[4.2vw] font-[600]">我的资料</div>
                    </div>
                    <div class='dark:bg-[#212121] w-[100vw] h-[2vw] bg-[#f1f1f1]'></div>
                    <van-cell-group class='dark:bg-[#2C2C2C]'>
                        <van-cell title="头像"  size="large" class='dark:bg-[#2C2C2C] dark:text-[#EAEAEA] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' >
                            <img src={this.user.profile.avatarUrl} alt="" class='w-[11vw] h-[11vw] rounded-[50%] float-right'/>
                        </van-cell>
                        <van-cell title="昵称" value={this.user.profile.nickname} onClick={()=>this.showview = !this.showview} size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' />
                        <van-cell title="性别" onClick={()=>this.genderBoolean = !this.genderBoolean} value={this.genderList[this.gender]} size="large" class='dark:text-[#FFFFFF] dark:bg-[#2C2C2C] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' />
                        <van-cell title="二维码"  size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' >
                            <Icon icon="ph:qr-code-thin"  class='text-[4.8vw] float-right'/>
                        </van-cell>
                    </van-cell-group>
                    <div class='dark:bg-[#212121] w-[100vw] h-[2vw] bg-[#f1f1f1]'></div>
                    <van-cell-group class='dark:bg-[#2C2C2C]'>
                        <van-cell title="生日" value={this.TimestampConversion(this.userData.profile.birthday)} size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                        <van-cell title="地区"  size="large" value={this.province[0]+this.city[0]} onClick={()=>this.popupVisible = !this.popupVisible} class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' ></van-cell>
                        <van-cell title="大学" value="未填写" size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                        <van-cell title="音乐标签" value="选择标签" size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                        <van-cell title="简介" value="还没有简介" size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                    </van-cell-group>
                    <div class='dark:bg-[#212121] w-[100vw] h-[2vw] bg-[#f1f1f1]'></div>
                    <van-cell-group class='dark:bg-[#2C2C2C]'>
                        <van-cell title="个人主页隐私设置"  size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                        <van-cell title="主页模块顺序设置"  size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                    </van-cell-group>
                    <div class='dark:bg-[#212121] w-[100vw] h-[2vw] bg-[#f1f1f1]'></div>
                    <van-cell-group class='dark:bg-[#2C2C2C]'>
                        <van-cell title="账号绑定和设置" size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                    </van-cell-group>
                </Wrapper>
                {/*地区*/}
                <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                    <van-area columns-num="2" confirm-button-text="完成" area-list={areaList} value={this.city[1]} onConfirm={this.confirm}/>
                </van-popup>
                {/*性别*/}
                <van-popup v-model={this.genderBoolean} position="bottom" style={{ height: '30%' }}>
                    <van-picker show-toolbar columns={this.genderList} default-index={this.userData.profile.gender} onConfirm={this.genderConfirm} onCancel={()=>this.genderBoolean = false} confirm-button-text="完成" cancel-button-text="取消"/>
                </van-popup>
                {/*昵称*/}
                <van-popup v-model={this.showview} position="bottom"  style={{height: '100%'}}>
                    <div class="dark:bg-[#2C2C2C] flex justify-between w-[100%]  items-center h-[14vw] bg-[#FFFFFF] pl-[4vw] text-[3.5vw] pr-[4vw]">
                        <div class='flex items-center'>
                            <Icon icon="simple-line-icons:arrow-left" class="dark:text-[#FFFFFF] mr-[4vw] text-[4vw] text-[#333333]" nativeOnClick={() => {this.showview = false}}/>
                            <div class="dark:text-[#f3f3f4]  flex items-center justify-center text-[#2a3146]  text-[4.2vw] font-[600]">修改昵称</div>
                        </div>
                       <div>
                           <p class={['text-[3.8vw]', 'float-right', 'font-semibold', this.duplicated ? 'text-[#ccc]' : 'text-[#000]']} onClick={this.NicknameID}>完成</p>
                       </div>
                    </div>
                    <div class="mt-[2.7vw] h-[11.2vw] ">
                        <input class="pl-[1.5vw] h-[11.2vw] w-[96vw] border-b-[1px] border-[#D9D9D9] ml-[4vw]" type="text" placeholder="请输入昵称" v-model={this.nicknameview}/>
                        {this.duplicated ? <div class='h-[11vw] flex items-center text-[3.1vw] text-[#FE3C3A] pl-[4vw]'>{this.errors}</div>:<div></div>}
                        <div class='pl-[4vw]'>
                            {this.duplicated? <div class='px-[3.2vw] py-[2.5vw] rounded-[200px] bg-[#F3F3F3] text-[3vw] tetx-[#313131] inline-block'>{this.repeatNicname}</div>:<div></div>}
                        </div>
                    </div>

                </van-popup>
            </div>
        )
    },
    data(){
        return {
            user:[],
            userData:[],
            popupVisible: false,
            province:[],//省
            city:[],//市
            genderBoolean:false,//性别弹出框
            genderList:['保密','男','女'],//性别数组
            gender:0,//性别下标

            showview: false,//昵称显示隐藏
            nicknameview: null,//value值
            repeatNicname: null,//昵称重复的推荐昵称
            duplicated: false,//判断昵称是否重复
            errors:'昵称已经被注册，请选择下列名称',



        }
    },
    methods:{
        //地区函数
        confirm(e) {
            this.popupVisible = false;
            this.province[0] = e[0].name;
            this.city[0] = e[1].name;
            this.province[1] = e[0].code;
            this.city[1] = e[1].code;
        },
        //性别函数
        genderConfirm(e) {
            this.genderBoolean = false;
            this.gender = this.genderList.indexOf(e); // 查找对应性别 获取对应的下标
        },
        //昵称
        async NicknameID(){
            if(this.duplicated){
                await fetchUserUpdata(this.nicknameview)
                this.showview = false;
            }
        },
        //时间
        TimestampConversion(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // 注意月份从 0 开始，需要加 1
            const day = date.getDate();
            return (`${year}-${month}-${day}`);
        },
        //地区查询
        postalCodeSearch(key, zipCode) {
            if (areaList.hasOwnProperty(key) && areaList[key][zipCode]) {
                let src = areaList[key][zipCode];
                return src;
            }
        },
    },
    async created() {
        console.log('__m__User', store.get('__m__User'));
        console.log('__m__UserData', store.get('__m__UserData'));
        this.user = store.get('__m__User');
        this.userData = store.get('__m__UserData');

        // 默认地区
        this.province[0] = this.postalCodeSearch('province_list',this.userData.profile.province);
        this.province[1] = this.userData.profile.province + ''; // 省的邮编
        this.city[0] = this.postalCodeSearch('city_list', this.userData.profile.city);
        this.city[1] = this.userData.profile.city + ''; // 市的邮编

        //性别
        this.gender = this.userData.profile.gender;
    },
    watch:{
        nicknameview: _.debounce(async function (newValue) {
            const res = await featNicknameCheck(newValue);
            console.log(res);
            if(res.data.code === 400) {
                this.errors =  res.data.message
                this.duplicated = false;
            }
            if(res.data.duplicated) {
                this.repeatNicname = res.data.candidateNicknames[0];
                this.duplicated = res.data.duplicated;
            }
        }, 300)
    },
}