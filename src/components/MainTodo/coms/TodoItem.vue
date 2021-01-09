<template>
  <div :class="['todo-item',todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <!-- checkbox绑定的值（todo.completed）也是判断是否加划线的变量，点击会改变todo.completed的值，进而改变样式 -->
    <label>{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    }, //props:接受父组件传值
    methods: {
      delItem() {
        this.$emit('del', this.todo.id) //给父组件del方法传参数this.todo.id
      },
    },
  }
</script>


<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 30px
      height: 30px
      text-align: center
      margin-right: 10px
      cleanDefaultStyle()

      &:after
        content: url('~images/unChecked.svg')

      &:checked:after
        content: url('~images/Checked.svg')

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>