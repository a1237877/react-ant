import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import TouchableOpacity from './TouchableOpacity'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const size = 'large';
class App  extends Component {
  constructor(props){
    super(props);
    this.functionRef = null;
    this.objectRef = React.createRef();
  }
  state = {}
  componentDidMount(){//组件已经挂载  此时获取ref才是安全的
    this.refs.strRef.innerHTML = 'string ref'
    this.functionRef.innerHTML = 'Function ref'
    this.functionRef.addEventListener('click',()=>{
      console.log('function ref clicked')
    })
    this.objectRef.current.innerHTML = 'object ref'
  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        <TouchableOpacity >
          确定
          <a href="">确定</a>
        </TouchableOpacity >
        <TouchableOpacity >
          取消
        </TouchableOpacity >


        </div>
        <h1 ref="strRef"></h1>
        <h1 ref={(node)=>{
          this.functionRef=node
        }}></h1>
        <h1 ref={this.objectRef}></h1>
      </div>
    );
  }
}

export default App;
