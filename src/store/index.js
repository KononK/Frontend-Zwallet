import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from './globalStore.js'

// Module
import auth from './modules/auth.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  ...globalStore,
  modules: {
    auth,
    user
  }
})
