import request from '@/utils/request'
export const getMyFavorite = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
