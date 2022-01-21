import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      isAuthenticated: false,
      userEmail: '',
      userId: null,
      roleId: null,
      isEmailVerified: false,
      permissions: undefined as any
    },
    session: {
      bearerToken: '',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
