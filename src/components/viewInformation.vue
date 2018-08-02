<template>
    <div class="viewInformation">
        <div class="collectionBtn">
            <i class="fa fa-heart-o fa-2x"></i>
        </div>
        <div class="wordsProgress">
            <mt-progress :value="50" :bar-height="9"></mt-progress>
            <p class="wordsProgressTip">(当前词汇第112个，总词汇359个)</p>
        </div>
        <div class="playMode">
            <i class="fa fa-random fa-2x"></i><!--forward-->
        </div>
    </div>
</template>

<script>
    import {Progress} from 'mint-ui';
    import Vue from 'vue';
    Vue.component(Progress.name,Progress);
    export default {
        name: "ViewInformation"
    };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles');
    .viewInformation{
        margin-top: 0.4rem;
        display: flex;
        align-items: center;
        padding: 0 0.1rem;
        justify-content: space-between;
        .collectionBtn{
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.46rem;
            border: 0.01rem solid @standard_color;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
        .wordsProgress{
            display: inline-block;
            position: relative;
            width: 2.6rem;
            .wordsProgressTip{
                position: absolute;
                left: 0.2rem;
                margin: 0;
                font-size: 0.12rem;
                color: lighten(@standard_color,20%);
            }
        }
        .playMode{
            color: @standard_color;
            font-size: 0.1rem;
        }
    }
</style>