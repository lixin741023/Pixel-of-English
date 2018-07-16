<template>
    <div class="mainPage">
        <search></search>
        <nick-name></nick-name>
        <slider-area></slider-area>
        <view-option></view-option>
        <view-information></view-information>
    </div>
</template>

<script>
    import search from './search.vue';
    import nickName from './nickName.vue';
    import sliderArea from './sliderArea.vue';
    import viewOption from './viewOption.vue';
    import viewInformation from './viewInformation.vue';

    export default {
        name: 'mainPage',
        components: {
            search,
            nickName,
            sliderArea,
            viewOption,
            viewInformation
        }
    };
</script>

<style scoped lang="less">
    .mainPage {
        position: absolute;
        width: 100%;
        height: 100%;

    }

</style>