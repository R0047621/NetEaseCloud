import {Mv} from '../../request'
import styled from 'styled-components-vue';

const Wrapper = styled.div`
  .tab {
    .van-tabs__wrap {
      margin-bottom: 3vw;
      border-radius: 15px;
    }

    .van-tab {
      font-size: 4vw;
      font-weight: 500;
      color: #9599a3;
    }

    .van-tab--active {
      color: #2a3146;
    }

    .van-tabs__nav {
      background: none;
    }

    .van-tabs__line {
      width: 4vw;
    }

    .van-sticky--fixed {
      top: 10vw;
      background: #f6f7fa;
    }
  }
`;
export default {
    render() {
        return (<Wrapper>
            {/*标题开始*/}
            <div class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">MV排行榜</div>

            <van-tabs swipeable animated onChange={this.beforeChange} class='tab'>
                {
                    this.tab.map((item)=>{ return <van-tab title={item}>
                        <div class={['overflow-auto' ,'px-[4vw]',$player.list === undefined ? 'h-[76vh]' : 'h-[70vh]']} >
                            {this.MvdataList?.map((item, index) => (<div class="w-[92vw]">
                                <div class="w-[100%] h-[52vw] relative"  onClick={()=> this.$router.push(`/videoPlayerView/${item.id}`)}>
                                    <img src={item.cover} class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"/>
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <Icon icon="solar:play-bold" color="#fdffff" class="mr-[0.5vw] text-[2.6vw]"/>{this.dataTruncation(item.playCount)}
                                    </div>
                                </div>
                                <div class='h-[15vw] flex items-center flex-wrap'>
                                    <div class="flex h-[5vw] w-[100vw]">
                                    <span class={['w-[5.3vw]', 'text-[4.3vw]', 'mr-[2.8vw]' ,'text-center',index< 3 ? 'text-[red]' : 'text-[#999999]']}>{index + 1}</span>
                                        <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{item.name}</span>
                                    </div>
                                    <div class="flex h-[4vw] items-center">
                                        {item.lastRank === index + 1 ? (
                                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">-</div>
                                        ) : null}
                                        {item.lastRank === -1 ? (
                                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">new</div>
                                        ) : null}
                                        {item.lastRank > index + 1 ? (<div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"><Icon icon="maki:triangle" class="text-[#f05357]"/>{item.lastRank - (index + 1)}</div>) : null}
                                        {item.lastRank < index + 1 && item.lastRank != -1 ? (
                                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                                <Icon icon="maki:triangle" rotate={2} class="text-[#57b5e4]"/>{index + 1 - item.lastRank}
                                            </div>
                                        ) : null}

                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                            {item?.artists?.map((key, index) => (<span>{key.name}{index < item.artists.length - 1 && <span>/</span>}</span>))}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </van-tab>})}
            </van-tabs>
        </Wrapper>)
    }, data() {
        return {
            tab: ['内地', '港台', '欧美', '韩国', '日本'],
            MvdataList: [],
            isLoading:true
        }
    }, methods: {
        async beforeChange(index) {
            try {
                this.isLoading = true;
                const res = await Mv(this.tab[index]);
                this.MvdataList = res.data.data;
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false; // 请求完成后取消加载状态
            }
            return true;
        },
        // 数据截断
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume.toString();
            }
        },
    },
    async created() {
        this.beforeChange(0);
    }
}
