export const state = () => ({
    news: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setNews(state, news) {
      state.news = news
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const news = await this.$axios.$get('/api/news/?limit=3')
      commit('setNews', news.results);
      commit('setNext', news.next)
      commit('setPrevious', news.previous);
    },
    async filterByStatus({commit}, news) {
      const filteredNews = [...news].filter(item => item.likes >= 50);

      console.log(news)
      commit('setNews', filteredNews)
    },
    async fetchAll({commit}) {
      const news = await this.$axios.$get('/api/news/')
      commit('setNews', news.results)
      commit('setNext', news.next);
      commit('setPrevious', news.previous);
    },
    sortByNames({commit}, news) {
      const sortedNews = [...news].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setNews', sortedNews);
    },
    async fetchNext({commit}, nextLink) {
      const news = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setNews', news.results);
      commit('setNext', news.next);
      commit('setPrevious', news.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const news = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setNews', news.results);
      commit('setNext', news.next);
      commit('setPrevious', news.previous);
    },
  }
  
  export const getters = {
    news: s => {
      console.log('got data')
      return s.news
    },
    next: s => s.next,
    prev: s => s.prev
  }
  