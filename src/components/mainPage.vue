<template>
    <div class="mainPage">
        <search></search>
        <nick-name style="display: none;"></nick-name>
    </div>
</template>

<script>
  import search from './search.vue';
  import nickName from './nickName.vue';

  export default {
    name:'mainPage',
    components:{
      search,
      nickName
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