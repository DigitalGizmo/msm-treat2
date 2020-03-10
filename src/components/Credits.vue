<template>
  <div class="lightbox" @click.self="closeCredits">
    <div id="slimpop-wrapper">

      <header>
        <p class="close">
          <a @click="closeCredits">Close</a>
        </p>

        <h2>Treat&rsquo;s Journal</h2>
        <h1>Credits</h1>
      </header>

      <div class="no-class">
        <p>Here are the credits!</p>

        <p>Note to Juliet: I put the lightbox and slim wrapper styles in Treat.vue --
        you might want to put some of the header styles there too -- to serve both this
        and FullEntry. --Don</p>

      </div>

    </div><!-- /#slippop-wrapper -->
  </div><!-- /.lightbox -->
</template>

<script>
export default {
  props: {
    entry: {
      type: Object
    },
    closeCredits: Function,
    currIndex: Number
  }
}
</script>
