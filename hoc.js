import React from 'react'


// 高阶组件：实际上是一个纯函数，该函数的入参是一个组件
// 什么是纯函数？唯一的入参，得到唯一返回值
// 高阶组件的作用：把组件中可以复用的业务逻辑抽离出来，方便复用与维护

// 高阶组件，也叫高阶函数，被称作是 容器组件
// 被修饰的这个入参组件WrappedComponent，被称作是 UI组件

function hoc(WrappedComponent) {

  // 返回一个新的组件
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        msg: 'abc',
        user: ''
      }
    }
    componentDidMount() {
      console.log('mounted')
      // 获取用户信息，调接口
      let user = localStorage.getItem('user')
      this.setState({user})
    }
    render() {
      return(
        <div>
          <WrappedComponent msg={this.state.msg} />
          <h3>hoc content</h3>
          <h3>{this.state.user}</h3>
        </div>
      )
    }

  }
}

export default hoc
