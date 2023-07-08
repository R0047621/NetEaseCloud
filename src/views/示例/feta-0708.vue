<script >
import { areaList } from '@vant/area-data';
import styled from "styled-components-vue";
import Button from "../../components/Button/button.vue";
const Wrapper = styled.div`
  .van-picker__confirm{color: red}`
export default {
  comments:{Button},
  render() {
    return (
        <div>
          <Wrapper>
            <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
              <van-area columns-num="2" confirm-button-text="完成" area-list={areaList} onConfirm={this.confirm}/>
            </van-popup>
          </Wrapper>
        </div>
    );
  },
  data() {
    return {
      popupVisible: true,
    };
  },
  methods: {
    confirm(e) {
      this.popupVisible = false;
      console.log(e);
    },
  },
};
</script>