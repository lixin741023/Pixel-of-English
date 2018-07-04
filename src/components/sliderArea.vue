<template>
    <div class="sliderArea">
        11
        <hr>
        <div class="item">
            <span>Spell</span>
            <div>
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
            <div>遍历</div>
            <div>
                <li>
                    <span>vt:</span>
                    <span>xxxx</span>
                    <span>xxxx</span>
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
          new islider(document.querySelector('.isliderBox'),imgList)
        }
  };
</script>

<style scoped lang="less">
    @import url('../styles/customStyles.less');
    .sliderArea{
        margin-top: 0.4rem;
        background-color: rgba(220,20,60,0.1);
    }
</style>