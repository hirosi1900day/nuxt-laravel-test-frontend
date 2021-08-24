const state = {
   user: null
}

const getters = {
   check: state => !! state.user,
   username: state => state.user ? state.user.name : '',
}

const mutations = {
   setUser (state, user) {
      state.user = user
   }
}

const actions = {
   async currentUser (context) {
      const response = await axios.get('http://localhost:8080/users/me')
      const user = response.date || null
      context.commit('setUser', user)
   },
   async register (context, userData) {
      const response = await axios.post('/api/register', userData)
      const user = response.data || null 
      context.commit('setUser', user)
   }
}