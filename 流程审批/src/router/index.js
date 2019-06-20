import Vue from 'vue'
import Router from 'vue-router'
import index from '../modules/index'
import publish from '../modules/publish'
import released from '../modules/released'
import mine from '../modules/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/released',
      name: 'released',
      component: released
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
