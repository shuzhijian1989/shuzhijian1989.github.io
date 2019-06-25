import React, {Component } from 'react'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {decrement, increment} from  '../reduxs/actions'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      age: '',
      scholl: '',
      remarks: ''
    }
  }

  static propTypes = {
    count: PropTypes.array.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }
  _onChangeVal = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  submit = () => {
    const {userName, age, scholl, remarks} = this.state
    const parmes = {
      "userName":userName, "age":age, "scholl":scholl, "remarks":remarks
    }
    this.props.increment(parmes)//进actions
  }
  decrement = (e, index) => {
    this.props.decrement(index)
  }
  render () {
    const {count} = this.props
    const {userName, age, scholl, remarks} = this.state
    return (
      <div>
        <h4>用户管理</h4>
        <table style={{border: "1px solid #e5eaf2"}}>
          <thead>
            <tr>
              <th>用户名</th>
              <th>年龄</th>
              <th>毕业学校</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              count.map((item, i) => (
                <tr key={i}>
                  <td>{item.userName}</td>
                  <td>{item.age}</td>
                  <td>{item.scholl}</td>
                  <td>{item.remarks}</td>
                  <td>
                  <a href="javascript:;">编辑</a>
                  <a href="javascript:;" onClick={(e)=>this.decrement(e, i)}>删除</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <br/>
        <form action="" >
          <input type="text" placeholder='请输入姓名' onChange={this._onChangeVal} name='userName' value={userName}/>
          <br/>
          <br/>
          <input type="text" placeholder="请输入年龄" onChange={this._onChangeVal} name='age' value={age}/>
          <br/>
          <br/>
          <input type="text" placeholder="请输入学校" onChange={this._onChangeVal} name='scholl' value={scholl}/>
          <br/>
          <br/>
          <input type="text" placeholder="请输入备注" onChange={this._onChangeVal} name='remarks' value={remarks}/>
        </form>
        <br/>
        <button onClick={this.submit}>提交</button>
        <a href='#/detail'>去detail</a>
      </div>
    )
  }
}
export default connect(
  state => ({count: state}),
  {increment, decrement}
)(Home)
