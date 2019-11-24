import Axios from 'axios'
import router from '../router'
// 检查有无 Token ，每次请求在 Axios 请求头上进行携带
if (window.localStorage.getItem('token')) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ` + window.localStorage.getItem('token')
}

export let instance = Axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? 'http://sayhub.me/api' : 'http://localhost:7001'
  baseURL:'http://localhost:8088/users/login'
})
// respone拦截器,对 2xx 状态码以外的结果进行拦截,如果状态码是401，则有可能是 Token 过期，跳转到登录页
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export const login = ({ loginUser, loginPassword }) => {
  return instance.post('/login', {
    username: loginUser,
    password: loginPassword
  })
}

export const getUserInfo = () => {
  return instance.get('/profile')
}
