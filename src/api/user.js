import request from '@/utils/request'
// import store from '@/store/index'

/**
 * 登录
 * @param {String} username 账号
 * @param {String} password 密码
 * @returns Promise
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

// /**
//  * 请求用户自己的信息
//  * @returns Promise
//  */
// export const getUserInfo = () => {
//   return request({
//     url: '/user'
//     // headers: {
//     //   // authorization: store.state.user.token
//     // }
//   })
// }

export const getMyFavorite = () => {
  return request({
    url: '/user/favorites'
    // headers: {
    //   authorization: store.state.user.token
    // }
  })
}
