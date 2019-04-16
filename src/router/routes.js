import store from '../store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/Index.vue'),
        beforeEnter(to, from, next) {
          store.state.photos.forEach((v, i) => {
            store.dispatch('getPhoto', v.filename)

            if (store.state.photos.length - 1 === i) {
              next()
            }
          })
        }
      }
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
