<template>
  <div id="todoList">
    <h1>Todo List</h1>
    <todo-add v-on:add="addTodo"></todo-add>
    <ul class="todos">
      <li v-for="todo, index in todos" class="todo">
        <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
          @click="completed(index)"
        >
        <span
          :class="todo.isCompleted ? 'completed' : ''"
          @click="completed(index)"
        >
          <em>{{ index }}.</em>{{ todo.text }}
        </span>
      </li>
    </ul>
    <div>
      <p v-show="todos.length === 0">
        所有的事情都已完成！
      </p>
      <p v-show="todos.length !== 0">
        <strong>{{ todos.length }}</strong> 个待办事项。{{ completedCounts }} 个已完成，{{ notCompletedCounts }} 个未完成。
      </p>
      <p id="instruction">
        说明：<br>
        这是一个简单的待做清单app<br>
        在文本框中输入文字，点击添加即可加入事项<br>
        单击事项可以使其被标记为已完成的状态，再次单击可以撤销操作<br>
        列表下方有对事项数目和完成情况的统计<br>
      </p>
    </div>
  </div>
</template>
<script>
import TodoAdd from './TodoAdd.vue'
export default {
  name: 'TodoList',
  components: {
    TodoAdd
  },
  data: () => ({
    todos: [{
      text: 'ics',
      isCompleted: false
    }, {
      text: 'algorithm',
      isCompleted: false
    }]
  }),
  methods: {
    completed (index) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted
    },
    addTodo (todo) {
      this.todos.push({
        text: todo,
        isCompleted: false
      })
    }
  },
  computed: {
    completedCounts () {
      return this.todos.filter(item => item.isCompleted).length
    },
    notCompletedCounts () {
      return this.todos.filter(item => !item.isCompleted).length
    }
  }
}
</script>
<style scoped>
#todoList {
  margin: 0 auto;
  max-width: 350px;
}
.todos li {
  list-style: none;
}
.todo {
  text-align: left;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  text-decoration-color: red;
}
#instruction
{
  text-align: left;
  color: #778899;
}
</style>
