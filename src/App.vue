<template>
  <Suspense>
    <template #default>
      <AsyncShow />
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="msg"/>
  <Modal />
</template>

<script lang="ts">
import { defineComponent, ref , provide} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import AsyncShow from './components/AsyncShow.vue';
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
  margin-top: 60px;
}
</style>
