<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper" class="entry-pop">

        <p class="close">
          <a @click="closeFullEntry">Close</a>
        </p>

      <header>
        <h2>Treat&rsquo;s Journal &bull; Site {{ currIndex }}</h2>
        <h1>{{ entry.title }}</h1>
      </header>

      <img :src="'images/large/' + imgname + '.jpg'" class="entry-map">

      <div class="entry-map">
        <span v-html="entry.interpret_more"></span>
        <a v-if="entry.is_flippable" @click="flipDrawing" class="flip">Flip Map</a>
      </div>

      <img :src="'images/ms/' + entry.slug + '.jpg'" class="entry-text">

      <div class="entry-text">
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
    currIndex: Number,
    imgname: String,
    flipDrawing: Function
  }
}
</script>

<style lang="scss" scoped>
/* shared styles for journal and credits popups in Treat.vue, specific styles here and Credits.vue */
  .entry-pop {
    display: grid;
    grid-gap: 2em;
    grid-template:
      "a b" auto
      "c d" auto
      "e f" auto /
      1fr 1fr;
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
    grid-area: a;

    h1 {
      font-size: 2.5em;
      font-style: italic;
      margin: 0;
    }
  }

  h2, a.flip {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin: 0;
  }

  a.flip {
    color: #C64C17;
  }

  p.close {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    grid-area: b;
    text-align: right;
  }

  .close a {
    color: #C64C17;
  }

  img.entry-map {
    grid-area: c;
  }

  div.entry-map {
    grid-area: d;
  }

  img.entry-text {
    grid-area: e;
  }

  div.entry-text {
    grid-area: f;
  }

  span.entry-text p {
    margin-top: 1em;
    font-style: italic;
  }

</style>
