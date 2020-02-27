<template>
  <div class="lightbox" @click.self="closeLightBox">
    <div id="slimpop-wrapper">
      <p class="close"> <a @click="closeLightBox">Close</a> </p>
      <h2>Treat&rsquo;s Journal &bull; Site X</h2>
      <h1>{{ entry.title }}</h1>

        <img :src="'images/large/' + entry.slug + '.jpg'" class="entry-map">
        <span v-html="entry.interpret_more" class="entry-map-text"></span>

        <img :src="'images/ms/' + entry.slug + '.jpg'" class="entry-text">
        <div>
          <h2>Journal Transcription</h2>
          <span v-html="entry.entry_text" class="entry-text-text">
          </span>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object
    },
    closeLightBox: Function
    // incEntry: Function,
  }
}
</script>

<style lang="scss">
  .lightbox {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/overlay.png) repeat;
    z-index: 99;
  }

  #slimpop-wrapper {
    background-color: #eff0de;
    border: 1px solid #b3aa98;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
    color: #535442;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    height: 85%;
    margin: 5% auto;
    overflow: scroll;
    padding: 1em 3em 3em 3em;
    width: 85%;

    h2 {
      font-size: 1em;
      font-variant: small-caps;
      grid-column: 1;
      letter-spacing: .05em;
      margin: -4em 0 0 0;
    }

    h1 {
      font-size: 2.5em;
      font-style: italic;
      grid-column: 1;
      margin: -2em 0 -1em 0;
    }

    img.entry-map, img.entry-text {
      grid-column: 1;
    }

    span.entry-map-text, span.entry-text-text {
      grid-column: 2;
    }

    div h2 {
      margin: 0;
    }

    .entry-text-text p {
      font-style: italic;
    }

    .close {
      font-size: 1em;
      font-variant: small-caps;
      grid-column: 2;
      letter-spacing: .05em;
      text-align: right;
    }
  }

</style>
