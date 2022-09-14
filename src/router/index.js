import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      //웹브라우져 주소 표시줄에 명시
      path: '/page-ghibli/home',
      //RouterView에 보여줄 페이지 컨포넌트명
      redirect: '/'
    },
    {
      //웹브라우져 주소 표시줄에 명시
      path: '/page-ghibli/',
      //RouterView에 보여줄 페이지 컨포넌트명
      component: HomeView
    },
    {
      path: '/page-ghibli/detail/:id',
      component: DetailView
    }
  ]
});

export default router;