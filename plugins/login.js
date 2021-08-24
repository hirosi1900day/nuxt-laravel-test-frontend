

export default ({app}, inject) => {
  inject('login', async (strategies, data) => {
   return  response = await app.$auth.loginWith(strategies, { data: data })
  })
}

