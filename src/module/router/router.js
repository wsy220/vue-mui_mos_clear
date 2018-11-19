import App from '../Appindex'

const home = r => require.ensure([], () => r(require('../home/HomePage')), 'home')



export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    {
      path: '/home',
      component: home
    }]
}]

