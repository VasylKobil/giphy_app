<template>
  <h2>Your favorite Gifs =)</h2>
  <div class="items" v-if="items">
    <div class="box" v-for="ele in items">
      <img width="150" height="150" :src="`${ele.images.preview_webp.url}`">
<!--      <button v-on:click="delete">Delete</button>-->
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  // methods: {
  //   delete(){
  //     console.log(this.items);
  //   }
  // }
}
</script>