import Vue from 'vue'

export default function ({ $axios, store, redirect, app }) {

  $axios.interceptors.response.use(
    response => response,
    error => {
      store.commit('error/setErrorMessage', error.response.statusText || error)
    }
  )
}
//    $axios.onError(error => {
//     Vue.toasted.error(error)
//      console.log('axous確認中')
//      if (error.response.status === app.$INTERNAL_SERVER_ERROR) {
//        redirect(`/${INTERNAL_SERVER_ERROR}/error`)
//      }else if (error.response.status === app.$UNPROCESSABLE_ENTITY) {
//        redirect(`/${UNPROCESSABLE_ENTITY}/error`)
//      }
//    })
// }