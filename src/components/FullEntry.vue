<template>
  <div class="lightbox" @click.self="closeLightBox">
    <div id="slimpop-wrapper">

      <header>
        <p class="close">
          <a @click="closeLightBox">Close</a>
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
    closeLightBox: Function,
    currIndex: Number
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
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2em;
    height: 80%;
    margin: 5% auto;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1em 3em 3em 3em;
    position: relative;
    width: 60%;
  }

  /*for less than super wide displays*/
  @media screen and (max-width: 1800px) {
    #slimpop-wrapper {
      height: 85%;
      width: 85%;
    }
  }

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
