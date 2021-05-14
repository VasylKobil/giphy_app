<template>
  <div class="items" v-if="data">
    <div class="box"  v-for="dat in data.data">
      <img width="150" height="150" :src="`${dat.images.preview_webp.url}`">
      <button v-on:click="$emit('addItem', dat)">Add to favorite</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['data']
}
</script>

<style>
  .box{
    display: flex;
    flex-direction: column;
    margin: 0 5px 10px 0;
  }
  .items{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
  }
</style>