<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <!-- keyup.enter：监听回车 -->
    <todo-item
      v-for="(item,index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <!-- 给子组件todo-item（TodoItem）传值  :todo="item"      @del="handleDeleteItem"监听子组件事件-->
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClear"
    ></todo-info>
    <!-- 给子组件todo-info传值  :total="total" -->
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'
  let id = 0
  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all', //默认显示所有的待办事项
      }
    },

    components: {
      TodoItem,
      TodoInfo,
    },
    methods: {
      addTodo() {
        if (this.content === '') return

        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false,
        }) //unshift：在数组头部插入对象

        this.content = ''
      },
      handleDeleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((item) => item.id === id),
          1
        ) //js的两个方法splice，findIndex，以及es6语法， 作用：删掉对应Id的对象
      },
      handleToggleState(state) {
        console.log('handleToggleState被调用')
        this.filter = state
        this.filterData
      },
      handleClear() {
        this.todoData = this.todoData.filter((item) => item.completed == false) //只留下未完成的项目
      },
    },
    computed: {
      filterData() {
        //filterData函数返回一个对象数组
        console.log('filterData被调用')
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter((item) => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter((item) => item.completed == true)
            break
        }
      }, //遍历filterData
    },
    watch: {
      //监听器
      todoData: {
        //监听todoData值的变化，做出变化时执行该方法
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        },
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-family: inherit
      font-weight: inherit
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>