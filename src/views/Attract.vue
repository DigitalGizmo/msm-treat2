<template>
  <div class="about">
    <h1>This is the Attract page</h1>

    <p>
      <router-link to="/">touch this link to begin</router-link>
    </p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      testparam: 'voila'
    }
  },
  name: 'About'
}
</script>

<style lang="scss">

</style>
