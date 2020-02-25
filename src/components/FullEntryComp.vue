<template>
  <div class="lightbox">
    <img :src="'images/small/intro.jpg'">
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        Info
      </div>
    </div>
  </div>
</template>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background-color: rgba(7, 7, 7, 0.5);*/
    background: url(../assets/overlay.png) repeat;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;
  }
  .lightbox-info {
    margin: auto 2rem auto 0;
  }
  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
  }
</style>
