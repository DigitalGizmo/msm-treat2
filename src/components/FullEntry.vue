<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper" class="entry-pop">

      <header>
        <p class="close">
          <a @click="closeFullEntry">Close</a>
        </p>

        <h2>Treat&rsquo;s Journal &bull; Site {{ currIndex }}</h2>
        <h1>{{ entry.title }}</h1>
      </header>

      <img :src="'images/large/' + imgname + '.jpg'" class="entry-map">

      <div class="entry-map">
        <span v-html="entry.interpret_more"></span>
        <a v-if="entry.is_flippable" @click="flipDrawing" class="flip">Flip Map</a>
      </div>

      <img :src="'images/ms/' + entry.slug + '.jpg'" class="entry-text">
      <h2 class="entry-text">Journal Transcription</h2>
      <span v-html="entry.entry_text" class="entry-text"></span>

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
    currIndex: Number,
    imgname: String,
    flipDrawing: Function
  }
}
</script>

<style lang="scss" scoped>
/* shared styles for journal and credits popups in Treat.vue, specific styles here and Credits.vue */
  .entry-pop {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 2em;
    height: 80%;
    margin: 5% auto;
    overflow-y: auto;
    overflow-x: hidden;
    width: 60%;
  }

  /*for less than super wide displays*/
  @media screen and (max-width: 1800px) {
    .entry-pop {
      height: 85%;
      width: 85%;
    }
  }

  header {
    grid-column: 1 / 3;

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
      position: absolute;
      top: 1em;
      right: 2em;
    }

    .close a {
      color: #C64C17;
    }
  }

  h2, a.flip {
    font-size: 1em;
    font-variant: small-caps;
    grid-column: 1;
    letter-spacing: .05em;
    margin: 0;
  }

  a.flip {
    color: #C64C17;
  }

  img.entry-map {
    grid-column: 1;
    grid-row: 2;
  }

  div.entry-map {
    grid-column: 2;
    grid-row: 2;
  }

  .entry-text img {
    grid-column: 1;
    grid-row: 3;
  }

  h2.entry-text, span.entry-text {
    grid-column: 2;
    grid-row: 3;
  }

  span.entry-text p {
    margin-top: 1em;
    font-style: italic;
  }

</style>
