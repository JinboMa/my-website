<template lang="pug">
.app
  h1 {{ msg }}
  my-test
</template>

<script>
import MyTest from './MyTest.vue'
export default {
  components: { MyTest },
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style scoped lang="stylus">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
