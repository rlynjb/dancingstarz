import store from '../store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/Index.vue'),
        beforeEnter(to, from, next) {
          store.dispatch('getBannerList').then(res => {
            res.forEach(v => {
              store.commit('pushBannersToState', {
                id: v.id,
                filename: v.data().filename,
                url: v.data().url,
                header: v.data().header,
                desc: v.data().desc
              })
            })
          }).then(res => {
            // get photo list
            store.dispatch('getPhotoList').then(res => {
              res.forEach(v => {
                store.commit('pushPhotosToState', {
                  id: v.id,
                  filename: v.data().filename,
                  url: v.data().url
                })
              })
            }).then(res => {
              next()
            })
          })

        }
      }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/admin/Index.vue'),
        beforeEnter(to, from, next) {
          // get photo list
          store.dispatch('getPhotoList').then(res => {
            res.forEach(v => {
              store.commit('pushPhotosToState', {
                id: v.id,
                filename: v.data().filename,
                url: v.data().url
              })
            })
          }).then(res => {
            next()
          })
        }
      },
      {
        path: '/dashboard/banners', component: () => import('pages/admin/Banners.vue'),
        beforeEnter(to, from, next) {
          // get photo list
          store.dispatch('getBannerList').then(res => {
            res.forEach(v => {
              store.commit('pushBannersToState', {
                id: v.id,
                filename: v.data().filename,
                url: v.data().url,
                header: v.data().header,
                desc: v.data().desc
              })
            })
          }).then(res => {
            next()
          })
        }
      }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
