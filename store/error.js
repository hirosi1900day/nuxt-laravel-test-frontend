const state = {
   status: false,
   errorMessage: false
}

const getters = {
   getStatus: state => !! state.status,
   errorMessage: state => state.errorMessage,
}

const mutations = {
   setStatus (state, status) {
      state.status = status
   },
   setErrorMessage (state, errorMessage) {
      state.errorMessage = errorMessage
     
   } 
}


export default {
   namespaced: true,
   state,
   getters,
   mutations,
 }