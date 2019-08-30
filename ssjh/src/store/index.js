
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      count: 555,
      myname:"zhushengqun",
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    mutations: {
      increment (state) {
        state.count++;
      }
    },
    actions: {
        increment1 (context) {
          context.commit('increment')
        }
      
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    }
  })
export default store
