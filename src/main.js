import Vue from 'vue';

/*styles*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mint-ui/lib/style.min.css';
import './styles/globalStyles.less';

/*scripts*/
import '../plugins/indigo.js';
import 'jquery';        /*expose*/


/*components*/
import app from './app.vue';

/*test*/
// import test1 from './test/test1.vue';

/*Entry*/
new Vue({
  render:(core)=>core(app)
}).$mount('#app');





