<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper">

      <header>
        <p class="close">
          <a @click="closeFullEntry">Close</a>
        </p>

        <h2>Treat&rsquo;s Journal &bull; Site {{ currIndex }}</h2>
        <h1>{{ entry.title }}</h1>
      </header>

      <div class="entry-map">
        <img :src="'images/large/' + entry.slug + '.jpg'">
        <span v-html="entry.interpret_more"></span>
      </div>

      <div class="entry-text">
        <img :src="'images/ms/' + entry.slug + '.jpg'">
          <h2>Journal Transcription</h2>
          <span v-html="entry.entry_text"></span>
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
    closeFullEntry: Function,
    currIndex: Number
  }
}
</script>

<style lang="scss">

  header {
    grid-column: 1 / 3;
    grid-row: 1;

    h2 {
      font-size: 1em;
      font-variant: small-caps;
      grid-column: 1;
      letter-spacing: .05em;
      margin: 0;
    }

    h1 {
      font-size: 2.5em;
      font-style: italic;
      grid-column: 1;
      margin: 0;
    }

    .close {
      font-size: 1em;
      font-variant: small-caps;
      grid-column: 2;
      letter-spacing: .05em;
      position: sticky;
      top: 1em;
      right: 1em;
      text-align: right;
    }

    .close a {
      color: #C64C17;
    }
  }

  .entry-map {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .entry-map img {
    grid-column: 1 / 2;
    grid-row: 2;
  }

  .entry-map span p {
    grid-column: 2 / 3;
    grid-row: 2;
  }

  .entry-text {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  .entry-text img {
    grid-column: 1 / 2;
    grid-row: 3;
  }

  .entry-text h2, .entry-text span p {
    grid-column: 2 / 3;
    grid-row: 3;
  }

  .entry-text span p {
    font-style: italic;
  }

</style>
