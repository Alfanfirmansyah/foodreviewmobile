
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',   name: 'index',component: () => import('pages/Index.vue'),
      children:[ { path: ':id',   name: 'detail-resto',component: () => import('pages/DetailResto.vue') }]
    },
     
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
