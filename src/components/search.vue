<template>
    <div class="search">
        <img class="searchIcon" src="../images/search.png" alt="search_button">
        <input class="searchInput" type="text">
        <ul>
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
        </ul>
    </div>
</template>

<script>
  export default {
    name:'search'
  };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .search{
        width: 2.5rem;
        position: relative;
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
            position: absolute;
            background-color: @standard_bgColor;
            width: 2rem;
            max-height: 2rem;
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
                    border: 0;
                }
            }
        }
    }

</style>