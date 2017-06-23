import Vue from 'vue'
import Router from 'vue-router'
import Campeonato from '@/components/Campeonato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Campeonato',
      component: Campeonato
    }
  ]
})
