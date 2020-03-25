import React, { Component } from 'react';
import logo from './logo.svg';
{/*
  router.js文件下的hashrouter下不能直接写成其他组件，因为与主页平级的页面还有很多，比如详情页面和登陆页面。
  因此使用App组件，而App组件使用{this.props.children}可以接受任何子组件。访问页面，不管什么页面，优先加载app组件。
*/}
class App extends Component {
  render(){
    return(
      <div>
        { this.props.children }
      </div>
      )
  }
}

export default App;
