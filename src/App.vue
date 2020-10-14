<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="test">
    <div @click="select(index)" v-for="(item, index) in list" :key="index">
      {{index}} : {{item}}
    </div>
  </div>
  <div class="">被选中的人是： {{selected}}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; 

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() { // setup 中定义 变量和逻辑
    const list = ref(['小明', '小张', '小强']); // 要在template 中的使用 必须用ref包装一下
    const selected = ref('');
    const select = (index: number) => {
      selected.value = list.value[index]
    };

   return { // 将需要在 template 中使用的 变量 和方法暴露出去
     list,
     selected,
     select
   };
  },
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
