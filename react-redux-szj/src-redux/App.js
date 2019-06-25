import React, {Component} from 'react';
import {INCREMENT, DECREMENT} from './redux/action-types'
import * as actions from  './redux/actions'
// import {connect} from 'react-redux'
export default class App extends Component {
  increment = () => {
    //触发action 中的方法
    this.props.store.dispatch(actions.incrementCreator(1))
    // this.props.incrementCreator(1)

  }

  decrement = () => {
    this.props.store.dispatch(actions.decrementCreactor(2))
    // this.props.decrementCreactor(2)
  }

  render() {
    const count = this.props.store.getState()
    // const {count} = this.props
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

// export default connect(
//   state => ({count: state}),
//   {INCREMENT, DECREMENT}
// )(App)