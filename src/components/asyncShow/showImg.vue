<template>
    <div>
        <img :src="result" alt="">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
const arrayBufferToBase64 = (buffer: any) => {
    console.log(buffer)
         var binary = '';
         var bytes = new Uint8Array(buffer);
         var len = bytes.byteLength;
         for (var i = 0; i < len; i++) {
               binary += String.fromCharCode(bytes[i]);
         }
         return window.btoa(binary);
}

export default defineComponent({
   async setup() {
        const rawData = await axios({
            method: 'get',
            url: 'https://chzz.oss-cn-hangzhou.aliyuncs.com/1/file//2023-06-26/7262_qianxun.png',
            responseType: 'arraybuffer'
        })
        console.log(arrayBufferToBase64(rawData.data))
        return {
           result: 'data:image/gif;base64,' + arrayBufferToBase64(rawData.data)
        }
    },
})
</script>