<template>
  <div class="hello">
    <h1>
      当前城市: {{ city }}
      温度: {{ cotyte ? cotyte : 0 }}℃
      时间: {{ nowTime }}
    </h1>
    <ul>
      <li v-for="(item, index) in msg" :key="index" @click="seletCity(index, msg)">{{ item }}</li>
    </ul>
  
    <div>
      <button @click="changeImg">选择</button>
    </div>
  </div>
</template>

<script lang="ts">
import { nowTime, getNowTime } from "../hooks/useNowTime";
import useUrlAxios  from "../hooks/useUrlAxios";

import { defineComponent,
         ref,
         reactive, 
         toRefs, 
         inject, 
         onBeforeMount,
         onMounted,
         onBeforeUpdate,
         onUpdated,
         onRenderTracked,
         onRenderTriggered,
         watch
        } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    // msg: [],
  },
  setup() {
    let title = ref("当前城市");
    const msg = inject('msg')
    const data = reactive({
      city: '',
      temperature: ['25', '26', '29'],
      cotyte: '',
      seletCity: (index: number, msg: string[]) => {
        data.city = msg[index]
        data.cotyte = data.temperature[index]
        title.value = title.value + data.city +'切换完成'
        document.title =  title.value
      },
    })

    watch([title, () => data.city], (newValue, oldValue) => {
      // console.log(`new--->${newValue}`);
      // console.log(`old--->${oldValue}`);
      // document.title = newValue[1];
    });
    /* onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件数据更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件数据更新之后-----onUpdated()");
    }); */
   /*  onRenderTracked((event) => {
      console.log("状态跟踪组件----------->");
      console.log(event);
    }); */
    /* onRenderTriggered((event) => {
      console.log("状态触发组件--------------->");
      console.log(event);
    }); */
    const refData = toRefs(data);

    return{
      msg,
      title,
      ...refData,
      nowTime,
      getNowTime,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
