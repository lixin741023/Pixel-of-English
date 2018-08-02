<template>
    <div class="viewOption">
        <li @click="changeView($event)" class="activeOption">标准</li>
        <li @click="changeView($event)">联想</li>
        <li @click="changeView($event)">我的收藏</li>
        <li @click="changeView($event)">翻译词汇</li>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button} from 'mint-ui';
    Vue.component(Button.name,Button);
    export default {
        name: "viewOption",
        methods:{
            changeView:(event)=>{
                let viewOption=document.querySelectorAll('.viewOption li');
                for(let i=0; i<viewOption.length; i++){
                    if(event.currentTarget==viewOption[i]){
                        event.currentTarget.classList.add('activeOption');
                    }else{
                        viewOption[i].classList.remove('activeOption');
                    }
                }
            }
        }
    };

</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .activeOption{
        background-color: darken(@app_ThemeColor,5%);
    }
    .viewOption{
        display: flex;
        justify-content: space-around;
        margin-top: 0.25rem;
        padding: 0 0.02rem;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0.8rem;
            padding: 0.1rem;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            border: 0.01rem solid @standard_color;
            font-size: 0.1rem;
        }
    }
</style>