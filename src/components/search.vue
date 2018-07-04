<template>
    <div class="search">
        <img class="searchIcon" src="../images/search.png" alt="search_button">
        <input class="searchInput" type="text">
        <ul class="wrpper">
            <div class="content">
                <li>advance</li>
                <li>adventure</li>
                <li>advanceer</li>
                <li>typo</li>
                <li>advance</li>
                <li>adventure</li>
                <li>advanceer</li>
                <li>typo</li>
                <li>advance</li>
                <li>adventure</li>
                <li>advanceer</li>
                <li>typo</li>
            </div>
        </ul>

    </div>
</template>

<script>
    import BScroll from 'better-scroll';
  export default {
    name:'search',
    data:()=>({
    }),
    mounted(){
      new BScroll('.wrpper')

    }
  };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .search{
        position: absolute;
        left: 0.02rem;
        top: 0.02rem;
        width: 2.5rem;
        display: flex;
        align-items: center;
        .searchIcon{
            width: 0.25rem;
            height: 0.25rem;
        }
        .searchInput{
            width: 2rem;
            height: 0.26rem;
            background-color: transparent;
            border: 0;
            border-bottom: 0.01rem solid @standard_color;
            outline: none;
            color: @input_color;
            font-size: 0.14rem;
            font-weight: bold;
            text-align: center;
        }
        ul{
            display: none;
            position: absolute;
            background-color: @standard_bgColor;
            width: 2rem;
            max-height: 2.1rem;
            overflow-y: auto;
            border: 0.015rem dashed @standard_color;
            top: 0.3rem;
            left: 0.25rem;
            font-size: 0.13rem;
            padding-left: 0.05rem;
            padding-right: 0.05rem;
            padding-bottom: 0.05rem;
            li{
                padding:5px 5px 4px 5px;
                overflow-y: auto;
                border-bottom: 0.01rem solid @standard_color;
                &:last-child{
                }
            }
        }
    }

</style>