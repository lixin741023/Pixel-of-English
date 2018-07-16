<template>
    <div class="sliderArea">
        11
        <hr>
        <div class="item">
            <span class="words">Spell</span>
            <div class="Yinbiao">
                <span>
                    <img src="../images/Yinbiao.png" alt="小喇叭">
                    <span>[SPEL]</span>
                    <span>美</span>
                </span>
                <span>
                    <img src="../images/Yinbiao.png" alt="小喇叭">
                    <span>[SPEL]</span>
                    <span>英</span>
                </span>
            </div>
            <div class="Zhiyi">遍历</div>
            <div class="translate">
                <li>
                    <span>vt:</span>
                    <span>行动、翻译、动作</span>
                    <span>测试大小、文字测试</span>
                </li>
                <li>
                    <span>vi:</span>
                    <span>xxxx</span>
                    <span>xxxx</span>
                </li>
                <li>
                    <span>n:</span>
                    <span>xxxx</span>
                    <span>xxxx</span>
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
        background-color: rgba(220,20,60,0.1);
        .item{
            margin: 0 auto;
            padding: 0.5rem;
            width: 3.5rem;
            height: 3.5rem;
            border: 0.01rem solid @standard_color;
            .words{
                font-family: Aharoni;
                font-size: 0.45rem;
           }
            .Yinbiao{
                font-size: 0.12rem;
                img{
                    width: 0.2rem;
                    height: 0.2rem;
                }
            }
            .Zhiyi{
                font-size: 0.3rem;
            }
            .translate{
                font-size: 0.14rem;
            }
        }
    }
</style>