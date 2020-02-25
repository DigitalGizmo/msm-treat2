<template>
  <div class="lightbox" @click.self="closeLightBox">
    <div id="slimpop-wrapper">
      <p> <a @click="closeLightBox">Close</a> </p>
      <img :src="'images/large/' + entry.slug + '.jpg'">
      <div>
        <span v-html="entry.interpret_more"></span>
      </div>

      <img :src="'images/large/neso-camp.jpg'">
      <div>
        <span v-html="entry.entry_text"></span>
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

<style>
  .lightbox {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    /*background-color: rgba(7, 7, 7, 0.5);*/
    background: url(../assets/overlay.png) repeat;
/*    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
*/    z-index: 99;
  }
  .lightbox img {
    margin: auto;
    width: 30%;
    grid-column-start: 2;
  }
  #slimpop-wrapper {
    background-color: #fff4e4;
    border: 1px solid #b3aa98;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
    overflow: auto;
    padding: 3px;
    margin-left: 3em;
    margin-right: 3em;
    margin-top: 3em;
    margin-bottom: 3em;
  }
  .slimpop-close {
    /* for the close link */
    float: right;
  }

</style>
