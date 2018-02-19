import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Search from './components/search.vue'
import Gouwuche from './components/shopcart.vue'
import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './static/vendor/mui/dist/css/mui.css'
import './static/css/global.css'
import NavBar from './components/common/navbar.vue'
import News from './components/news.vue'
import NewsDetail from './components/newsdetail.vue'

Axios.defaults.baseURL='http://localhost:8081/'
Vue.use(VueRouter)
Vue.use(Mint)

Vue.component('navBar',NavBar)
let router=new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
	{
		name:'home',path:'/home',component:Home
	},
	{
		name:'search',path:'/search',component:Search
	},
	{
		name:'gouwuche',path:'/gouwuche',component:Gouwuche
	},
	{
		name:'news',path:'/news',component:News
	},
	{
		name:'newsdetail',path:'/newsdetail',component:NewsDetail
	},
	{
		path:'/',redirect:{name:'home'},
	}]
})
Vue.prototype.$ajax=Axios
new Vue({
	el:'#app',
	render:c=>c(App),
	router
})