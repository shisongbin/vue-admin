import main from '@/pages/main'
import home from '@/pages/home/home'
import recent from '@/pages/recent'
import guang from '@/pages/guang'
import order from '@/pages/order'
import me from '@/pages/me'

const mainRouter = {
  path: '/',
  component: main,
  children:[
    {
      path: '/',
      name: 'main',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/recent',
      name: 'recent',
      component: recent
    },
    {
      path: '/guang',
      name: 'guang',
      component: guang
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
}

export default mainRouter