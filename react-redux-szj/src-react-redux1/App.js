import React, {Component} from 'react';
import {decrementCreactor, incrementCreactor} from  './redux/actions'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementCreactor: PropTypes.func.isRequired,
    decrementCreactor: PropTypes.func.isRequired
  }
  increment = () => {
    //触发action 中的方法
    this.props.incrementCreactor(1)
  }

  decrement = () => {
    this.props.decrementCreactor(2)
  }

  render() {
    const {count} = this.props
    console.log(count,'op')
    return (
      <div>
        <p>点击的{count}次数</p>
        <div>
          <select>
            <option value="1">1</option>  
            <option value="2">2</option>  
            <option value="3">3</option>  
            <option value="4">4</option>  
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
//react-redux分为两大类  ui组件和容器组件
export default connect(//容器
  // 调用actions 中的方法
  state => ({count: state}),
  {incrementCreactor, decrementCreactor}
)(App)//ui