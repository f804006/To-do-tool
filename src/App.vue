<template>
  <div>
    <main-header></main-header>
    <!-- main-header对应的就是MainHeader  忽视大小写-->
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'
  import MainFooter from './components/MainFooter.vue'
  export default {
    name: 'App',
    components: {
      MainHeader: MainHeader, //挂在到vue实例下面
      MainTodo,
      MainFooter,
    },
  }
</script>

<style lang="stylus" scoped>  h1
    color: red

  li:nth-of-type(odd)
    color: red
</style>