<template>
  <div>
    <h1>Find GIF</h1>
    <input type="text" placeholder="Write here..." v-model="input">
    <button @click="click">Submit</button>
    <hr>
    <gifsBox
      v-bind:data="data"
      v-on:addItem="addItem"
    />
    <Favorite
        v-bind:items="items"
    />
  </div>

</template>

<script>
import getData from '/src/services';
import GifsBox from "./gifsBox";
import Favorite from "./Favorite";
import {onMounted} from 'vue';

export default {
  components: {Favorite, GifsBox},
  data(){
    return {
      data: null,
      input: '',
      items: []
    }
  },
  methods: {
    async click(){
      const promise = await getData.request(this.input);
      this.$data.data = promise;
      this.input = '';
    },
    addItem(data){
      this.items.push(data);
    }
  },
  setup(){
    onMounted(() => {
      const savedData = localStorage.data ? JSON.parse(localStorage.data) : null;
      this.items(savedData);
      window.onbeforeunload = () => {
        localStorage.data = JSON.stringify(this.items);
        return "Are you sure you want to close the window?";
      }
    })
  }
}
</script>