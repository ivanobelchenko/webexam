export const state = () => ({
    orderForm: {},
    answer: {}
  })
  
export const mutations = {
  setOrderForm(state, orderForm) {
      state.orderForm = orderForm
  },
  setAnswer(state, answer) {
      state.answer = answer
  }
}
  
  export const actions = {
    async postForm({commit}, payload) {

        const answer = await this.$axios.$post('/api/news/', payload)
        commit('setAnswer', answer);
        console.log('success')
    }
  }
  
  export const getters = {
    orderForm: s => s.orderForm,
    answer: s => s.answer
  }
  