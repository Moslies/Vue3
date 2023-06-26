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
@keyframes ball {
    0% { top: 0%; left: 0%;}
    10% { top: 10%; left: 20%;}
    20% { top: 20%; left: 40%}
    30% { top: 30%; left: 60%}
    40% { top: 40%; left: 80%}
    50% { top: 50%; left: 100%}
    60% { top: 60%; left: 80%}
    70% { top: 70%; left: 60%;}
    80% { top: 80%; left: 40%;}
    90% { top: 90%; left: 20%;}
    100% { top: 100%; left: 0%;} 
}
#center {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  position: fixed; 
  animation-name: ball;
  animation-duration: 10s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  margin-left: -100px;
  margin-top: -100px;
}
</style>