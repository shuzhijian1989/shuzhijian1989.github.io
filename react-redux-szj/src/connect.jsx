import react from 'react'
import {connect} from 'react-redux'
import container from './containers/app'
import {decrementCreactor, incrementCreactor, incrementAsync} from  './redux/actions'

//react-redux分为两大类  ui组件和容器组件
export default connect(//容器
  // 调用actions 中的方法
  state => ({count: state}),
  {incrementCreactor, decrementCreactor, incrementAsync}
)(container)//ui