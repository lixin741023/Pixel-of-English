<template>
    <div class="app">
        <main-page></main-page>
    </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';

  export default {
    name:'app',
    components:{
      mainPage
    }
  };
</script>

<style scoped lang="less">
    @import url('styles/customStyles.less');
    .app {
        position: absolute;
        width: 100%;
        min-width: 360px;
        height: 100%;
        background-color: @app_ThemeColor;
    }
</style>