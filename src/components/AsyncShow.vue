<template>
    <div>
        <img :src="result.imgUrl" alt="">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'


export default defineComponent({
   async setup() {
        const rawData = await axios.get('https://apiblog.jspang.com/default/getGirl')
        return {
           result: rawData.data
        }
    },
})
</script>
