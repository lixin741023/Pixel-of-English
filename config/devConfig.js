const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin.js');
const webpack=require('webpack');

console.log('---------------------------------------------------------------------------------------------------------------------------------------------->');
const devConfig={
  mode:'development',
  entry:path.resolve(__dirname,'../src/main.js'),
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].bundle.js',
    publicPath:'dist/'
  },
  devServer:{
    contentBase:'./',
    port:6001,
    hot:true
  },
  module:{
    rules:[
      {test:/\.vue$/,loader:'vue-loader'},
      {test:/\.css$/,loader:['style-loader','css-loader']},
      {test:/\.less/,loader:['style-loader','css-loader','less-loader']},
      {test:/.(png|jpg|git)$/,loader:'file-loader',options:{
          outputPath :'images/'
        }}
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports=devConfig;

