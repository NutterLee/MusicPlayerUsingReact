import Vue from 'vue'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#todoList h1').textContent)
      .to.equal('Todo List')
  })
})
