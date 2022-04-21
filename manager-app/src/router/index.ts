import { createRouter, createWebHistory } from 'vue-router'

import { ElMessageBox } from 'element-plus'

import nav2_i from '@/assets/images/nav/nav2.png'
import nav2_a_i from '@/assets/images/nav/nav2_a.png'

import nav2_1_i from '@/assets/images/nav/nav2_1.png'
import nav2_1_a_i from '@/assets/images/nav/nav2_1_a.png'

import nav2_2_i from '@/assets/images/nav/nav2_2.png'
import nav2_2_a_i from '@/assets/images/nav/nav2_2_a.png'

import nav3_i from '@/assets/images/nav/nav3.png'
import nav3_a_i from '@/assets/images/nav/nav3_a.png'

import nav3_1_i from '@/assets/images/nav/nav3_1.png'
import nav3_1_a_i from '@/assets/images/nav/nav3_1_a.png'

import nav3_2_i from '@/assets/images/nav/nav3_2.png'
import nav3_2_a_i from '@/assets/images/nav/nav3_2_a.png'

import nav3_3_i from '@/assets/images/nav/nav3_3.png'
import nav3_3_a_i from '@/assets/images/nav/nav3_3_a.png'

import nav3_4_i from '@/assets/images/nav/nav3_4.png'
import nav3_4_a_i from '@/assets/images/nav/nav3_4_a.png'

import nav4_i from '@/assets/images/nav/nav4.png'
import nav4_a_i from '@/assets/images/nav/nav4_a.png'

import nav4_1_i from '@/assets/images/nav/nav4_1.png'
import nav4_1_a_i from '@/assets/images/nav/nav4_1_a.png'

import nav4_2_i from '@/assets/images/nav/nav4_2.png'
import nav4_2_a_i from '@/assets/images/nav/nav4_2_a.png'

import nav4_3_i from '@/assets/images/nav/nav4_3.png'
import nav4_3_a_i from '@/assets/images/nav/nav4_3_a.png'

import nav4_4_i from '@/assets/images/nav/nav4_4.png'
import nav4_4_a_i from '@/assets/images/nav/nav4_4_a.png'

import nav4_5_i from '@/assets/images/nav/nav4_5.png'
import nav4_5_a_i from '@/assets/images/nav/nav4_5_a.png'
import nav5_i from '@/assets/images/nav/nav5.png'
import nav5_a_i from '@/assets/images/nav/nav5_a.png'

import nav5_1_i from '@/assets/images/nav/nav5_1.png'
import nav5_1_a_i from '@/assets/images/nav/nav5_1_a.png'

import nav5_2_i from '@/assets/images/nav/nav5_2.png'
import nav5_2_a_i from '@/assets/images/nav/nav5_2_a.png'

import nav5_3_i from '@/assets/images/nav/nav5_3.png'
import nav5_3_a_i from '@/assets/images/nav/nav5_3_a.png'


// lv 当前路由权限id，clv 子路由权限id集合(不包括孙子)
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: '/index',
    meta: { title: '康洲数智后台管理系统' },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '首页' },
        children:[
          {
            path: '/index',
            name: 'Index1',
            component: () => import('@/views/layout/index/index.vue'),
            meta: { title: '首页' },
          },
          {
            path: '/index/editpass',
            name: 'EditPass',
            component: () => import('@/views/layout/index/editPass.vue'),
            meta: { title: '修改登录密码', father:'/index' },
          }
        ]
      },
      {
        path: '/users',
        name: 'Users',
        redirect: '/users/user',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '用户/企业管理', icon:nav2_i, icon_a:nav2_a_i, lv:'1', clv:'25,26' },
        children:[
          {
            path: '/users/user',
            name: 'User',
            component: () => import('@/views/layout/users/user.vue'),
            meta: { title: '用户管理', icon:nav2_1_i, icon_a:nav2_1_a_i, keepAlive:true, lv:'25' },
          },
          {
            path: '/users/userinfo',
            name: 'Userinfo',
            component: () => import('@/views/layout/users/userInfo.vue'),
            meta: { title: '用户信息', father:'/users/user' },
          },
          {
            path: '/users/company',
            name: 'Company',
            component: () => import('@/views/layout/users/company.vue'),
            meta: { title: '企业管理', icon:nav2_2_i, icon_a:nav2_2_a_i, keepAlive:true, lv:'26' },
          },
          {
            path: '/users/companydetails',
            name: 'Companydetails',
            component: () => import('@/views/layout/users/companyDetails.vue'),
            meta: { title: '企业详情', father:'/users/company' },
          },
          {
            path: '/users/companyreview',
            name: 'CompanyReview',
            component: () => import('@/views/layout/users/companyReview.vue'),
            meta: { title: '企业认证审核', father:'/users/company' },
          },
        ]
      },
      {
        path: '/website',
        name: 'Website',
        redirect: '/website/banner',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '官网管理', icon:nav3_i, icon_a:nav3_a_i, lv:'2', clv:'6,7,18,19' },
        children:[
          {
            path: '/website/banner',
            name: 'Banner',
            redirect: '/website/banner/index',
            component: () => import('@/views/layout/website/banner/banner.vue'),
            meta: { title: 'banner管理', icon:nav3_1_i, icon_a:nav3_1_a_i, lv:'6', showTopNav:true },
            children:[
              {
                path: '/website/banner/index',
                name: 'BannerIndex',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '官网首页', father:'/website/banner', lv:'8', isTopNav:true },
              },
              {
                path: '/website/banner/product',
                name: 'BannerProduct',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '产品与服务', father:'/website/banner', lv:'9', isTopNav:true },
              },
              {
                path: '/website/banner/sales',
                name: 'BannerSales',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '数智营销通', father:'/website/banner', lv:'10', isTopNav:true },
              },
              {
                path: '/website/banner/vipdata',
                name: 'BannerVipdata',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '药智器械', father:'/website/banner', lv:'11', isTopNav:true },
              },
              {
                path: '/website/banner/attract',
                name: 'BannerAttract',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '商务合作', father:'/website/banner', lv:'12', isTopNav:true },
              },
              {
                path: '/website/banner/member',
                name: 'BannerMember',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '会员中心', father:'/website/banner', lv:'13', isTopNav:true },
              },
              {
                path: '/website/banner/help',
                name: 'BannerHelp',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '帮助中心', father:'/website/banner', lv:'14', isTopNav:true },
              },
              {
                path: '/website/banner/navigation',
                name: 'BannerNavigation',
                component: () => import('@/views/layout/website/banner/bannerPage.vue'),
                meta: { title: '行业导航', father:'/website/banner', lv:'15', isTopNav:true },
              },
            ]
          },
          {
            path: '/website/inform',
            name: 'Inform',
            redirect: '/website/inform/dynamic',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '动态与公告', icon:nav3_2_i, icon_a:nav3_2_a_i, lv:'7', showTopNav:true },
            children:[
              {
                path: '/website/inform/dynamic',
                name: 'Dynamic',
                component: () => import('@/views/layout/website/inform/dynamic.vue'),
                meta: { title: '首页动态', father:'/website/inform',lv:'16', isTopNav:true },
              },
              {
                path: '/website/inform/dynamic/dynamicdetails',
                name: 'DynamicDetails',
                component: () => import('@/views/layout/website/inform/detail.vue'),
                meta: { title: '动态详情',father:'/website/inform/dynamic',lv:'16'},
              },
              
              {
                path: '/website/inform/dynamic/dynamicadd',
                name: 'DynamicAdd',
                component: () => import('@/views/layout/website/inform/articleAdd.vue'),
                meta: { title: '动态详情编辑/新增',father:'/website/inform/dynamic',lv:'16'},
              },
              {
                path: '/website/inform/notice',
                name: 'notice',
                component: () => import('@/views/layout/website/inform/notice.vue'),
                meta: { title: '通知与公告', father:'/website/inform',lv:'17', isTopNav:true },
              },
              {
                path: '/website/inform/notice/noticedetails',
                name: 'NoticeDetails',
                component: () => import('@/views/layout/website/inform/detail.vue'),
                meta: { title: '通知与公告详情',father:'/website/inform/notice',lv:'17' },
              },
              {
                path: '/website/inform/notice/noticeadd',
                name: 'NoticeAdd',
                component: () => import('@/views/layout/website/inform/articleAdd.vue'),
                meta: { title: '通知与公告详情编辑/新增',father:'/website/inform/notice',lv:'17' },
              },
            ]
          },
          {
            path: '/website/news',
            name: 'News',
            component: () => import('@/views/layout/website/news/news.vue'),
            meta: { title: '资讯中心', icon:nav3_3_i, icon_a:nav3_3_a_i, lv:'18' },
          },
          {
            path: '/website/newsdetails',
            name: 'NewsDetails',
            component: () => import('@/views/layout/website/news/newsDetail.vue'),
            meta: { title: '资讯详情',father:'/website/news',lv:'18' },
          },
          {
            path: '/website/examine',
            name: 'NewsExamine',
            component: () => import('@/views/layout/website/news/newsExamine.vue'),
            meta: { title: '资讯审核',father:'/website/news',lv:'18' },
          },
          {
            path: '/website/news/newsadd',
            name: 'NewsAdd',
            component: () => import('@/views/layout/website/inform/articleAdd.vue'),
            meta: { title: '添加资讯',father:'/website/news',lv:'18' },
          },
          {
            path: '/website/service',
            name: 'Service',
            redirect: '/website/service/tutorials',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '客服管理', icon:nav3_4_i, icon_a:nav3_4_a_i, lv:'19', showTopNav:true },
            children:[
              {
                path: '/website/service/tutorials',
                name: 'Tutorials',
                component: () => import('@/views/layout/website/service/tutorials.vue'),
                meta: { title: '视频教程', father:'/website/service', lv:'20', isTopNav:true },
              },
              {
                path: '/website/service/problem',
                name: 'Problem',
                component: () => import('@/views/layout/website/service/problem.vue'),
                meta: { title: '常见问题', father:'/website/service', lv:'23', isTopNav:true },
              },
              {
                path: '/website/service/school',
                name: 'School',
                component: () => import('@/views/layout/website/service/school.vue'),
                meta: { title: '营销学堂', father:'/website/service', lv:'21', isTopNav:true },
              },
              {
                path: '/website/service/feedback',
                name: 'Feedback',
                component: () => import('@/views/layout/website/service/feedback.vue'),
                meta: { title: '客户反馈', father:'/website/service', lv:'22', isTopNav:true },
              },
            ]
          },
        ]
      },
      {
        path: '/dmp',
        name: 'Dmp',
        redirect: '/dmp/findb',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'DMP系统', icon:nav4_i, icon_a:nav4_a_i,lv:'3', clv:'40,42,50,53,56' },
        children:[
          {
            path: '/dmp/findb',
            name: 'FindB',
            redirect: '/dmp/findb/specificdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找B端客户', icon:nav4_1_i, icon_a:nav4_1_a_i, lv:'40', showTopNav:true},
            children:[
              {
                path: '/dmp/findb/specificdata',
                name: 'SpecificData',
                component: () => import('@/views/layout/dmp/findb/specificData.vue'),
                meta: { title: '个性化数据', keepAlive:true,father:'/dmp/findb',lv:'41', isTopNav:true },
              },
              {
                path: '/dmp/findb/specificdatadetails',
                name: 'SpecificDataDetails',
                component: () => import('@/views/layout/dmp/findb/specificDataDetails.vue'),
                meta: { title: '个性化数据详情', father:'/dmp/findb/specificdata' },
              },
            ]
          },
          {
            path: '/dmp/findc',
            name: 'FindC',
            redirect: '/dmp/findc/wxdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找C端客户', icon:nav4_2_i, icon_a:nav4_2_a_i, lv:'42', showTopNav:true },
            children:[
              {
                path: '/dmp/findc/wxdata',
                name: 'WxData',
                component: () => import('@/views/layout/dmp/findc/wxData.vue'),
                meta: { title: '微信获客', keepAlive:true, father:'/dmp/findc',lv:'43', isTopNav:true },
              },
              {
                path: '/dmp/findc/wxdatadetail',
                name: 'WxDataDetail',
                component: () => import('@/views/layout/dmp/findc/wxDataDetail.vue'),
                meta: { title: '微信获客详情', father:'/dmp/findc/wxdata' },
              },
              {
                path: '/dmp/findc/addata',
                name: 'AdData',
                component: () => import('@/views/layout/dmp/findc/adData.vue'),
                meta: { title: '广告投放', keepAlive:true, father:'/dmp/findc',lv:'44', isTopNav:true },
              },
              {
                path: '/dmp/findc/addatadetail',
                name: 'AdDataDetail',
                component: () => import('@/views/layout/dmp/findc/adDataDetail.vue'),
                meta: { title: '广告投放详情', father:'/dmp/findc/addata' },
              },
              {
                path: '/dmp/findc/baidudata',
                name: 'BaiduData',
                component: () => import('@/views/layout/dmp/findc/baiduData.vue'),
                meta: { title: '百度关键词获客', keepAlive:true, father:'/dmp/findc',lv:'45', isTopNav:true },
              },
              {
                path: '/dmp/findc/baidudatadetail',
                name: 'BaiduDataDetail',
                component: () => import('@/views/layout/dmp/findc/baiduDataDetail.vue'),
                meta: { title: '百度关键词获客详情', father:'/dmp/findc/baidudata' },
              },
              {
                path: '/dmp/findc/bigdata',
                name: 'BigData',
                component: () => import('@/views/layout/dmp/findc/bigData.vue'),
                meta: { title: '大数据获客', keepAlive:true, father:'/dmp/findc',lv:'46', isTopNav:true },
              },
              {
                path: '/dmp/findc/bigdatadetail',
                name: 'BigDataDetail',
                component: () => import('@/views/layout/dmp/findc/bigDataDetail.vue'),
                meta: { title: '大数据获客详情', father:'/dmp/findc/bigdata' },
              },
              {
                path: '/dmp/findc/teldata',
                name: 'TelData',
                component: () => import('@/views/layout/dmp/findc/telData.vue'),
                meta: { title: '400获客', keepAlive:true, father:'/dmp/findc',lv:'47', isTopNav:true},
              },
              {
                path: '/dmp/findc/teldatadetail',
                name: 'TelDataDetail',
                component: () => import('@/views/layout/dmp/findc/telDataDetail.vue'),
                meta: { title: '400获客详情', father:'/dmp/findc/teldata' },
              },
              {
                path: '/dmp/findc/biddingdata',
                name: 'BiddingData',
                component: () => import('@/views/layout/dmp/findc/biddingData.vue'),
                meta: { title: '竞价获客', keepAlive:true, father:'/dmp/findc',lv:'48', isTopNav:true },
              },
              {
                path: '/dmp/findc/biddingdatadetail',
                name: 'BiddingDataDetail',
                component: () => import('@/views/layout/dmp/findc/biddingDataDetail.vue'),
                meta: { title: '竞价获客详情', father:'/dmp/findc/biddingdata' },
              },
              {
                path: '/dmp/findc/msgdata',
                name: 'MsgData',
                component: () => import('@/views/layout/dmp/findc/msgData.vue'),
                meta: { title: '短信获客', keepAlive:true, father:'/dmp/findc',lv:'49', isTopNav:true },
              },
              {
                path: '/dmp/findc/msgdatadetail',
                name: 'MsgDataDetail',
                component: () => import('@/views/layout/dmp/findc/msgDataDetail.vue'),
                meta: { title: '短信获客详情', father:'/dmp/findc/msgdata' },
              },
            ]
          },
          {
            path: '/dmp/seekpathpro',
            name: 'Seekpathpro',
            redirect: '/dmp/seekpathpro/seekpath',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找渠道/项目', icon:nav4_3_i, icon_a:nav4_3_a_i, lv:'50',clv:'51,52' ,showTopNav:true},
            children:[
              {
                path: '/dmp/seekpathpro/seekpath',
                name: 'SeekPath',
                component: () => import('@/views/layout/dmp/seekPathPro/seekPath.vue'),
                meta: { title: '找渠道', keepAlive:true,father:'/dmp/seekpathpro',lv:'51', isTopNav:true },
              },
              {
                path: '/dmp/seekpathpro/seekpathdetail',
                name: 'SeekPathDetail',
                component: () => import('@/views/layout/dmp/seekPathPro/seekPathDetail.vue'),
                meta: { title: '找渠道详情', father:'/dmp/seekpathpro/seekpath' },
              },
              {
                path: '/dmp/seekpathpro/seekpro',
                name: 'SeekPro',
                component: () => import('@/views/layout/dmp/seekPathPro/seekProject.vue'),
                meta: { title: '找项目', keepAlive:true,father:'/dmp/seekpathpro',lv:'52', isTopNav:true },
              },
              {
                path: '/dmp/seekpathpro/seekprodetail',
                name: 'SeekProDetail',
                component: () => import('@/views/layout/dmp/seekPathPro/seekProjectDetail.vue'),
                meta: { title: '找项目详情', father:'/dmp/seekpathpro/seekpro' },
              },
            ]
          },
          {
            path: '/dmp/seekabroad',
            name: 'SeekAbroad',
            redirect: '/dmp/seekabroad/buyer',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找海外客户', icon:nav4_4_i, icon_a:nav4_4_a_i, lv:'53',clv:'54,55' ,showTopNav:true},
            children:[
              {
                path: '/dmp/seekabroad/buyer',
                name: 'Buyer',
                component: () => import('@/views/layout/dmp/seekAbroad/buyer.vue'),
                meta: { title: '找采购商', keepAlive:true,father:'/dmp/seekabroad',lv:'54', isTopNav:true },
              },
              {
                path: '/dmp/seekabroad/buyerdetail',
                name: 'BuyerDetail',
                component: () => import('@/views/layout/dmp/seekAbroad/buyerDetail.vue'),
                meta: { title: '找采购商详情', father:'/dmp/seekabroad/buyer' },
              },
              {
                path: '/dmp/seekabroad/supplier',
                name: 'Supplier',
                component: () => import('@/views/layout/dmp/seekAbroad/supplier.vue'),
                meta: { title: '找供应商', keepAlive:true,father:'/dmp/seekabroad',lv:'55', isTopNav:true },
              },
              {
                path: '/dmp/seekabroad/supplierdetail',
                name: 'SupplierDetail',
                component: () => import('@/views/layout/dmp/seekAbroad/supplierDetail.vue'),
                meta: { title: '找供应商详情', father:'/dmp/seekabroad/supplier' },
              },
            ]
          },
          {
            path: '/dmp/dmpset',
            name: 'DmpSet',
            redirect: '/dmp/dmpSet/dataset',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: 'DMP设置', icon:nav4_5_i, icon_a:nav4_5_a_i, lv:'56',clv:'57' ,showTopNav:true},
            children:[
              {
                path: '/dmp/dmpset/dataset',
                name: 'DataSet',
                component: () => import('@/views/layout/dmp/dmpSet/dataSet.vue'),
                meta: { title: '数据设置', keepAlive:true,father:'/dmp/dmpset',lv:'57', isTopNav:true },
              },
            ]
          },
        ]
      },
      {
        path: '/cms',
        name: 'Cms',
        redirect: '/cms/myWork',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'CMS系统管理', lv:'4', clv:'27,32,37', icon:nav5_i, icon_a:nav5_a_i },
        children:[
          {
            path: '/cms/mywork',
            name: 'Mywork',
            redirect: '/cms/myWork/article',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '我的作品库', lv:'27',showTopNav:true ,icon:nav5_1_i, icon_a:nav5_1_a_i},
            children:[
              {
                path: '/cms/myWork/article',
                name: 'MyworkArticle',
                component: () => import('@/views/layout/cms/myWork/article.vue'),
                meta: { title: '软文', father:'/cms/mywork',isTopNav:true,lv:'28' },
              },
              {
                path: '/cms/myWork/images',
                name: 'MyworkImage',
                component: () => import('@/views/layout/cms/myWork/images.vue'),
                meta: { title: '图片库', father:'/cms/mywork',isTopNav:true,lv:'29'},
              },
              {
                path: '/cms/myWork/poster',
                name: 'MyworkPoster',
                component: () => import('@/views/layout/cms/myWork/poster.vue'),
                meta: { title: '海报库', father:'/cms/mywork',isTopNav:true,lv:'30' },
              },
              {
                path: '/cms/myWork/video',
                name: 'MyworkVideo',
                component: () => import('@/views/layout/cms/myWork/video.vue'),
                meta: { title: '视频库', father:'/cms/mywork',isTopNav:true,lv:'31' },
              },
              
            ]
          },
          {
            path: '/cms/myworkdet',
            name: 'Myworkdet',
            component: () => import('@/views/layout/cms/myWork/articleDetails.vue'),
            meta: { title: '软文详情', father:'/cms/mywork' },
          },
          {
            path: '/cms/custom',
            name: 'Custom',
            redirect: '/cms/custom/article',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '个性化内容库', lv:'32' ,showTopNav:true ,icon:nav5_2_i, icon_a:nav5_2_a_i},
            children:[
              {
                path: '/cms/custom/article',
                name: 'CustomArticle',
                component: () => import('@/views/layout/cms/custom/article.vue'),
                meta: { title: '软文', father:'/cms/custom',isTopNav:true,lv:'33' },
              },
              {
                path: '/cms/custom/images',
                name: 'CustomImage',
                component: () => import('@/views/layout/cms/custom/images.vue'),
                meta: { title: '图片', father:'/cms/custom',isTopNav:true,lv:'34' },
              },
              {
                path: '/cms/custom/poster',
                name: 'CustomPoster',
                component: () => import('@/views/layout/cms/custom/poster.vue'),
                meta: { title: '海报', father:'/cms/custom',isTopNav:true,lv:'35' },
              },
              {
                path: '/cms/custom/video',
                name: 'CustomVideo',
                component: () => import('@/views/layout/cms/custom/video.vue'),
                meta: { title: '视频', father:'/cms/custom',isTopNav:true,lv:'36' },
              },
              
            ]
           
          },
          {
            path: '/cms/customdet',
            name: 'Customdet',
            component: () => import('@/views/layout/cms/custom/articleDetails.vue'),
            meta: { title: '软文详情', father:'/cms/custom' },
          },
          {
            path: '/cms/customedit',
            name: 'Customedit',
            component: () => import('@/views/layout/cms/custom/articleEdit.vue'),
            meta: { title: '编辑', father:'/cms/custom' },
          },
          {
            path: '/cms/resource',
            name: 'Resource',
            // redirect: '/cms/resource/article.vue',
            component: () => import('@/views/layout/cms/resource/article.vue'),
            meta: { title: '资源内容库', lv:'37',icon:nav5_3_i, icon_a:nav5_3_a_i},
            
          },
        ]
      },
      {
        path: '/system',
        name: 'System',
        redirect: '/system/staff',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '系统管理', lv:'5', clv:'24,39' },
        children:[
          {
            path: '/system/staff',
            name: 'Staff',
            component: () => import('@/views/layout/system/staff.vue'),
            meta: { title: '管理员设置', keepAlive:true, lv:'24' },
          },
          {
            path: '/system/addstaff',
            name: 'AddStaff',
            component: () => import('@/views/layout/system/addStaff.vue'),
            meta: { title: '添加人员', father:'/system/staff' },
          },
          {
            path: '/system/editstaff',
            name: 'EditStaff',
            component: () => import('@/views/layout/system/editStaff.vue'),
            meta: { title: '权限修改', father:'/system/staff' },
          },
          {
            path: '/system/resourcepool',
            name: 'ResourcePool',
            redirect: '/system/resourcepool/imagepool',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '素材库', lv:'39', showTopNav:true },
            children:[
              {
                path: '/system/resourcepool/imagepool',
                name: 'ImagePool',
                component: () => import('@/views/layout/system/imagePool.vue'),
                meta: { title: '图片', father:'/system/resourcepool', lv:'58', isTopNav:true },
              },
              {
                path: '/system/resourcepool/videopool',
                name: 'VideoPool',
                component: () => import('@/views/layout/system/videoPool.vue'),
                meta: { title: '视频', father:'/system/resourcepool', lv:'59', isTopNav:true },
              },
            ]
          },
        ]
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

let userLvs:string[] = [] // 用户权限id数组
export const routerGuard = (userLv:string[], isSet = false)=>{
  userLvs = userLv;
  isSet && guardFn()
}
const guardFn = () => {
  router.beforeEach((to, from) => {
    //路由守卫
    if(to.meta.lv && userLvs.indexOf(to.meta.lv as string) == -1){
      if(to.meta.isTopNav){
        const rlist = router.getRoutes()
        // 解决重定向到三级topNav时没有权限的问题，循环路由寻找同父级路由下第一个有权限的路由
        rlist.forEach(v => {
          if(to.meta.father == v.path){
            const afterRoute = v.children.find(v => userLvs.indexOf(v.meta!.lv as string) > -1)
            afterRoute ? router.replace(afterRoute.path) : router.back()
          }
        })
      }else{
        ElMessageBox.alert(
          '当前账户无此权限！',
          '温馨提示',
          {
            confirmButtonText: '返回',
            callback: () => {
              router.replace(from.fullPath)
            },
          }
        )
        return false
      }
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '康洲数智后台管理系统'
    }
  })
}

export default router