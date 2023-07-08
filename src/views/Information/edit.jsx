import styled from "styled-components-vue";
import store from "storejs";
import {areaList} from "@vant/area-data";
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
                        <van-cell title="昵称" value={this.user.profile.nickname} size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' />
                        <van-cell title="性别" value={this.userData.profile.gender ? '男' : '女'} size="large" class='dark:text-[#FFFFFF] dark:bg-[#2C2C2C] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' />
                        <van-cell title="二维码"  size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' >
                            <Icon icon="ph:qr-code-thin"  class='text-[4.8vw] float-right'/>
                        </van-cell>
                    </van-cell-group>
                    <div class='dark:bg-[#212121] w-[100vw] h-[2vw] bg-[#f1f1f1]'></div>
                    <van-cell-group class='dark:bg-[#2C2C2C]'>
                        <van-cell title="生日" value={this.TimestampConversion(this.userData.profile.birthday)} size="large" class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]'/>
                        <van-cell title="地区"  size="large" value={this.city} onClick={()=>this.popupVisible = !this.popupVisible} class='dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[14vw] pr-[4vw]' ></van-cell>
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
                <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                    <van-area columns-num="2" confirm-button-text="完成" area-list={areaList} onConfirm={this.confirm}/>
                </van-popup>
            </div>
        )
    },
    data(){
        return {
            user:[],
            userData:[],
            popupVisible: false,
            city:'',
        }
    },
    methods:{
        confirm(e) {
            this.popupVisible = false
            this.city = e[0].name + e[1].name
        },
        //时间
        TimestampConversion(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // 注意月份从 0 开始，需要加 1
            const day = date.getDate();
            return (`${year}-${month}-${day}`);
        },
    },
    async created() {
        console.log('__m__User', store.get('__m__User'));
        console.log('__m__UserData', store.get('__m__UserData'));
        this.user = store.get('__m__User');
        this.userData = store.get('__m__UserData');
    }
}