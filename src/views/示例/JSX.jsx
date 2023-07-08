import styled from "styled-components-vue";
const Wrapper = styled.div`
  background: #7d848d;
  width: 50vw;
  height: 50vw;
  color: #f93b38;
`
export default {
    render(){
        return (
            <Wrapper >
                <div onClick={() => this.index++}>{this.index % 2 === 0 ? <div>偶数</div> : <div>奇数</div>}</div>
                <div >{this.msg}</div>
                <input type="text" value={this.value} onInput={(e) => this.value = e.target.value}/>
                <div>{this.value}</div>
            </Wrapper>
        )
    },
    data() {
        return {
            msg:'hello,jsx!',
            index:0,
            value:'123',
        }
    }
}