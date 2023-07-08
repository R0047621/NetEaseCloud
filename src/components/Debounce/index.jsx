import _ from 'lodash';
export default {
    render(){
        this.$slots.defaule[0].data.on.click = _.debounce(
            this.$slots.defaule[0].data.on.click,
            this.default);
        return this.$slots.defaule
    },
    props:{
        duration:{
            type:Number,
            default:500,
        }
    },
    mounted() {
        console.log(this.$slots.defaule[0].data.on.click);
    }
}