import request from '@/utils/request'
export const getSwiper = () => {
  return request({
    url: '/home/swiper',
    method: 'GET'
  })
}
export const getGroups = () => {
  return request({
    url: '/home/groups'
    // params: { id }
  })
}
