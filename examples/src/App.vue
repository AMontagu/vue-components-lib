<template>
  <div id="app">
    <my-container title="Vue Component Lib Example">
      <div slot="content">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <my-modal v-if="showModal" header="Awesome Header" @close="showModal=false">
          <div slot="body">
            <img src="./assets/logo.png"/>
            <p>Wonderfull Logo</p>
          </div>

          <template slot="responses" slot-scope="{ response }">
            <p v-if="response === 'agree'"> +1</p>
            <p v-else> -1</p>
          </template>
          <div slot="footer">
            <button @click="showModal=false" style="background-color: green; color: white">I agree</button>
            <button @click="showModal=false" style="background-color: red; color: white">I disagree</button>
          </div>
        </my-modal>
        <button @click="showModal=true">Show Modal</button>
      </div>
    </my-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      showModal: false
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
