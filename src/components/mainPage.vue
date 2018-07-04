<template>
    <div class="mainPage">
        <search></search>
        <nick-name></nick-name>
        <slider-area></slider-area>
    </div>
</template>

<script>
  import search from './search.vue';
  import nickName from './nickName.vue';
  import sliderArea from './sliderArea.vue';

  export default {
    name:'mainPage',
    components:{
      search,
      nickName,
      sliderArea
    }
  };
</script>

<style scoped lang="less">
    .mainPage{
        position: absolute;
        width: 100%;
        height: 100%;

    }

</style>