<template>
    <div class="nickName">
        Marvin Li
    </div>
</template>

<script>
  export default {
    name:'nickName'
  };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .nickName{
        position: absolute;
        top: 0.02rem;
        right: 0.05rem;
        color: @standard_color;
        font-size: 0.2rem;
        font-weight: bold;
    }
</style>