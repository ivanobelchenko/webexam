export const state = () => ({
    newsCount: 0,
  })
  
  export const mutations = {
    setNewsCount(state, newsCount) {
      state.newsCount = newsCount
    },
    setEmployers(state, employers) {
      state.employers = employers
    },
    setFinders(state, finders) {
      state.finders = finders
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      console.log('nuxtServerInit');
    },
    async refresh({commit}) {
      const news = await this.$axios.$get('/api/news/')
      commit('setNewsCount', news.count)
    }
  }
  
  export const getters = {
    newsCount: s => s.newsCount,
  }
  