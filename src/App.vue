<template>
  <div id="app">
    <AsyncShow />
    <HelloWorld :msg="msg"/>
  <Modal />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref , provide} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import AsyncShow from './components/asyncShow/index.vue';
import Modal from './components/Modal.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Modal,
    AsyncShow
  },
  setup() {
    const msg = ref(['北京', '上海', '深圳'])
    provide('msg', msg)
    return {
      msg
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
