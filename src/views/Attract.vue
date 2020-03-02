<template>
  <div class="attract-wrapper">
    <section class="attract-panel">
      <article class="attract-text">
        <h1>
          Journal &amp; Plans of Survey<br>
          by<br>
          Joseph Treat<br>
          1820
        </h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        <p>
          <router-link to="/">Touch this link to begin</router-link>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testparam: 'voila'
    }
  },
  name: 'Attract'
}
</script>

<style lang="scss">

  .attract-wrapper img {
    background: beige;
  }

  .attract-panel {
    background-color: rgba(53, 53, 36, 0.8);
    height: 100vh;
    margin: 0 auto;
    padding: 4em;
    width: 50%;
  }

  .attract-text {
    text-align: center;

    h1 {
      font-size: 3em;
      font-style: italic;
    }

    p{
      font-size: 1.5em;
      line-height: 1.5em;
      margin-top: 2em;
    }
  }

</style>
