import http from '../client/http'

export default {
  create({ name, email, phone }) {
    return http.request({
      url: '/landing-page/leads',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        name,
        email,
        phone
      }
    })
  }
}
