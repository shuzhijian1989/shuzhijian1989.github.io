import React, {Component} from 'react';
import PropTypes from "prop-types"
export default class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementCreactor: PropTypes.func.isRequired,
    decrementCreactor: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired

  }
  increment = () => {
    //触发action 中的方法
    this.props.incrementCreactor(1)
  }

  decrement = () => {
    this.props.decrementCreactor(2)
  }
  incrementAsync = () => {
    this.props.incrementAsync(1)
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