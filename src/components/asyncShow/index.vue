<template>
    <Suspense>
      <template #default>
        <ShowImg />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ShowImg from './showImg.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
        ShowImg
    },
    setup() {
      const msg = ref([''])
      return {
        msg
      }
    }
  });
  </script>
  
  <style>

  </style>
  