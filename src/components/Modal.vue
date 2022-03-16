<template>
    <teleport to="#modal">
        <div id="center">
            <h2>{{ nowTime }}</h2>
        </div>
    </teleport>
</template>
<script lang="ts">
import { nowTime, getNowTime } from '../hooks/useNowTime'

export default {
    setup() {
        getNowTime()
        return {
            nowTime
        }
    }
};
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>