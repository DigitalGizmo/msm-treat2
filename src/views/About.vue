<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li>global: {{ globalTest }}</li>
      <li>developer: {{ developer }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      globalTest: process.env.VUE_APP_SOMENAME,
      developer: process.env.VUE_APP_DEVELOPER
      // testparam: 'voila'
    }
  },
  name: 'About'
}
</script>
