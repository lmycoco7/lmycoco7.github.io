import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Forget from '@/components/Forget'
import City from '@/components/City'
import Takeout from '@/components/Takeout'
import Footer from "@/components/common/Footer"
import Search from "@/components/Search"
import Profile from "@/components/Profile"
import Order from "@/components/Order"
import Food from "@/components/Food"
import Shop from "@/components/Shop"
import FoodDetail from '@/components/FoodDetail'
import ConfirmOrder from '@/components/ConfirmOrder'
import OrderDetail from '@/components/OrderDetail'
import shopDetail from '@/components/shopDetail'
import shopSafe from '@/components/shopSafe'
import chioceLocation from '@/components/chioceLocation'
import addAddress from '@/components/addAddress'
import searchAddress from '@/components/searchAddress'
import profileInfo from  '@/components/profile/profileInfo'
import setusername from  '@/components/profile/setusername'
import  infoAddress from '@/components/profile/infoAddress'
import infoAddAddress from '@/components/profile/infoAddressAdd'
import balance from  '@/components/profile/Balance'
import balanceDetail from '@/components/profile/BalanceDetail'
import benefit from  '@/components/profile/Discount'
import benefitDetail from  '@/components/profile/Discountexplain'
import hbHistory from '@/components/profile/Historyhongbao'
import coupon from '@/components/profile/Voucherexplain'
import download from '@/components/profile/Down'
import exchange from '@/components/profile/Exchange'
import recommend from '@/components/profile/Recommend'
import points from '@/components/profile/integral'
import integralMall from '@/components/profile/integralMall'
import pointsDetail from '@/components/profile/service/integralQues'
import member from '@/components/profile/Member'
import memberexplain from '@/components/profile/Memberexplain'
import pay from  '@/components/profile/Pay'
import exchangemember from '@/components/profile/Exchangemember'
import Purchaserecord from '@/components/profile/Purchaserecord'
import Evaluate from '@/components/Evaluate'

import Service from '@/components/profile/service/Service'
import Supervip from '@/components/profile/service/Supervip'
import Signrules from '@/components/profile/service/Signrules'
import Levelexplain from '@/components/profile/service/Levelexplain'
import Takephoto from '@/components/profile/service/Takephoto'
import Payques from '@/components/profile/service/Payques'
import Otherques from '@/components/profile/service/Otherques'
import Ontime from '@/components/profile/service/Ontime'
import Vipexplain from '@/components/profile/service/Vipexplain'
import Vipques from '@/components/profile/service/Vipques'
import Redques from '@/components/profile/service/Redques'
import Activityrules from '@/components/profile/service/Activityrules'
import Addsign from '@/components/profile/service/Addsign'
import Discountexplain from '@/components/profile/service/Discountexplain'
import Reliefexplain from '@/components/profile/service/Reliefexplain'
import Cooperate from '@/components/profile/service/Cooperate'
import Goodshop from '@/components/profile/service/Goodshop'
import Anonymousbuy from '@/components/profile/service/Anonymousbuy'
import Activityques from '@/components/profile/service/Activityques'
import Balanceques from '@/components/profile/service/BalanceQues'
import Searchsite from '@/components/profile/Searchsite'
Vue.use(Router)





export default new Router({
  routes: [
    { 
      path:'/balanceques',
      component:Balanceques
    },
    {
      path:'/searchsite',
      component:Searchsite
    },
    {
      path:'/integralques',
      component:pointsDetail
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/supervip',
      component: Supervip
    },
    {
      path: '/signrules',
      component: Signrules
    },
    {
      path: '/levelexplain',
      component: Levelexplain
    },
    {
      path: '/takephoto',
      component: Takephoto
    },
    {
      path: '/payques',
      component: Payques
    },
    {
      path: '/otherques',
      component: Otherques
    },
    {
      path: '/ontime',
      component: Ontime
    },
    {
      path: '/vipexplain',
      component: Vipexplain
    },
    {
      path: '/vipques',
      component: Vipques
    },
    {
      path: '/redques',
      component: Redques
    },
    {
      path: '/activityrules',
      component: Activityrules
    },
    {
      path: '/addsign',
      component: Addsign
    },
    {
      path: '/discountexplain',
      component: Discountexplain
    },
    {
      path: '/reliefexplain',
      component: Reliefexplain
    },
    {
      path: '/cooperate',
      component: Cooperate
    },
    {
      path: '/goodshop',
      component: Goodshop
    },
    {
      path: '/anonymousbuy',
      component: Anonymousbuy
    },
    {
      path: '/activityques',
      component: Activityques
    },
    {
      path:'/Purchaserecord',
      name:"Purchaserecord",
      component:Purchaserecord
    },
    {
      path:'/member',
      name:"member",
      component:member
    },
    {
      path:'/memberexplain',
      name:"memberexplain",
      component:memberexplain
    },
    {
      path:'/pay',
      name:"pay",
      component:pay
    },
    {
      path:'/exchangemember',
      name:"exchangemember",
      component:exchangemember
    },
    {
      path:'/points',
      name:"points",
      component:points
    },
    {
      path:'/integralMall',
      name:"integralMall",
      component:integralMall
    },
    {
      path:'/points/detail',
      name:"pointsDetail",
      component:pointsDetail
    },
    {
      path:'/download',
      name:"download",
      component:download
    },
    {
      path:'/evaluate',
      name:"Evaluate",
      component:Evaluate
    },
    {
      path:'/benefit/recommend',
      name:"recommend",
      component:recommend
    },
    {
      path:'/benefit/exchange',
      name:"exchange",
      component:exchange
    },
    {
      path:'/benefit/coupon',
      name:"coupon",
      component:coupon
    },
    {
      path:'/benefit/hbHistory',
      name:"hbHistory",
      component: hbHistory
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: benefit
    },
    {
      path: '/benefit/detail',
      name: 'benefitDetail',
      component: benefitDetail
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/shop/shopDetail",
      name: "shopDetail",
      component: shopDetail
    },
    {
      path: "/shop/shopDetail/shopSafe",
      name: "shopSafe",
      component: shopSafe
    },
    {
      path: '/city/:cityid',
      name: 'City',
      component: City
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: "/food",
      name: "Food",
      component: Food
    },
    {
      path: '/order/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/confirmOrder',
      name: 'ConfirmOrder',
      component: ConfirmOrder
    },
    {
      path: "/confirmOrder/chioceLocation",
      name: "chioceLocation",
      component: chioceLocation
    },
    {
      path: "/confirmOrder/chioceLocation/addAddress",
      name: "addAddress",
      component: addAddress
    },
    {
      path:"/profile/info",
      name:'profileInfo',
      component:profileInfo
    },
    {
      path:"/profile/info/setusername",
      name:'setUserName',
      component:setusername
    },
    {
      path:"/profile/info/infoAddress",
      name:'address',
      component:infoAddress
    },
    {
      path:'/profile/info/address/add',
      name:"infoaddaddress",
      component:infoAddAddress
    },
    {
      path:'/balance',
      name:"balance",
      component:balance
    },
    {
      path:'/balance/detail',
      name:"balanceDetail",
      component:balanceDetail
    },
    {
      path: "/confirmOrder/chioceLocation/addAddress/searchAddress",
      name: "searchAddress",
      component: searchAddress
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [{
        path: '/shop/foodDetail',
        name: 'FoodDetail',
        component: FoodDetail
      }]
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer,
      children: [{
          path: '/takeout',
          name: "Takeout",
          component: Takeout
        },
        {
          path: "/search",
          name: "Search",
          component: Search
        },
        {
          path: "/order",
          name: "Order",
          component: Order
        },
        {
          path: "/profile",
          name: "Profile",
          component: Profile
        }
      ]

    }
  ]
})
