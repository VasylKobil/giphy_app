<template>
  <div v-if="items[0]">
    <h2>Your favorite Gifs =)</h2>
    <div class="items">
      <div class="box" v-for="ele in items">
        <img width="150" height="150" :src="`${ele.images.preview_webp.url}`" alt="picture">
        <button v-on:click="$emit('deleteItem', ele.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>