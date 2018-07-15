<template>
    <div class="sliderArea">
        <div class="item">
            <span class="words">translate_content</span>
            <div class="Yinbiao">
                <span class="Yinbiao_a">
                    <img src="../images/Yinbiao.png" alt="小喇叭">
                    <span>[SPEL]</span>
                    <span class="Yinbiao_type">美</span>
                </span>
                <span class="Yinbiao_b">
                    <img src="../images/Yinbiao.png" alt="小喇叭">
                    <span>[SPEL]</span>
                    <span class="Yinbiao_type">英</span>
                </span>
            </div>
            <div class="Zhiyi">遍历</div>
            <div class="translate">
                <li>
                    <span class="translate_title">vt:</span>
                    <span class="translate_content">中文翻译、中文3、中文4、中文5、中文6</span>
                </li>
                <li>
                    <span class="translate_title">vi:</span>
                    <span class="translate_content">中文翻译、中文1、中文2、中文3、6</span>
                </li>
                <li>
                    <span class="translate_title">vi&vt:</span>
                    <span class="translate_content">中文翻译、中文1、中文2中文4、中文5、中文6中文6</span>
                </li>
                <li>
                    <span class="translate_title">n:</span>
                    <span class="translate_content">中文翻译、中文1、中文3、中文4、中文5、中文6</span>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    import islider from 'islider.js';
  export default {
    name:'sliderArea',
        mounted(){
            let imgList=[
              {content:'src/images/1.png'},
              {content:'src/images/2.png'},
              {content:'src/images/3.png'}
            ]
          // new islider(document.querySelector('.isliderBox'),imgList)
        }
  };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .sliderArea{
        margin-top: 0.4rem;
        /*background-color: rgba(220,20,60,0.1);*/
        background-color: darken(@app_ThemeColor,5%);
        .item{
            margin: 0 auto;
            width: 3.5rem;
            min-height: 3.5rem;
            border: 0.01rem solid @standard_color;
            .words{
                font-family: Aharoni;
                display: block;
                margin: 0.1rem;
                margin-bottom: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.3rem;
           }
            .Yinbiao{
                .Yinbiao_a{
                    display: inline-block;
                    margin-left: 0.1rem;
                    margin-right: 0.1rem;
                }
                .Yinbiao_b{
                    display: inline-block;
                    margin-top: 0.1rem;
                    margin-left: 0.1rem;
                }
                .Yinbiao_type{
                    font-weight: bold;
                    color: lighten(@standard_color,10%);
                }
                font-size: 0.12rem;
                img{
                    width: 0.2rem;
                    height: 0.2rem;
                }
            }
            .Zhiyi{
                margin-top: 0.1rem;
                margin-left: 0.1rem;
                font-size: 0.3rem;
            }
            .translate{
                margin-top: 0.1rem;
                padding: 0 0.1rem;
                font-size: 0.14rem;
                li{
                    display: flex;
                    align-items: center;
                    margin-top: 0.05rem;
                    padding: 0.05rem 0;
                    border-bottom: 1px dashed @standard_color;
                    .translate_title{
                        width: 0.45rem;
                        text-align: right;
                        color: lighten(@standard_color,10%);
                        font-weight: bold;
                    }
                    .translate_content{
                        width: 2.75rem;
                        padding-left: 10px;
                        font-size: 0.12rem;
                    }
                }
            }
        }
    }
</style>