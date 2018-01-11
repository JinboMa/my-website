<template lang="pug">
.my-test
  h2 {{ msg }}
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello this is test'
    }
  }
}
</script>

<style scoped lang="stylus">
.my-test {
  background-color: skyblue;
}
</style>
