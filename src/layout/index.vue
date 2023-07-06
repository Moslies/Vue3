<template>
  <div class="app-wrapper">
      <div class="asyncShow">
        <asyncShow />
      </div>
      <AppMain />
      <Modal />
  </div>
</template>
<script setup>
import asyncShow from '@/components/asyncShow';
import Modal from '@/components/Modal.vue';
import AppMain from './components/AppMain.vue';
</script>
<style lang="scss">
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .asyncShow {
      position: absolute;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  }
</style>
  