<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="test">
    <div @click="select(index)" v-for="(item, index) in list" :key="index">
      {{index}} : {{item}}
    </div>
  </div>
  <div class="">{{a}}被选中的人是： {{selected}}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';  // 使用reactive 优化代码； 使用 toRefs() 优化渲染的时候的 data

export default ({
  name: 'App',
  components: {
  },
  setup() { // setup 中定义 变量和逻辑
    interface DataProps { // 定义接口作为类型注解
      list: string[];
      selected: string;
      select: (index: number) => void;
    }
    const data: DataProps = reactive({ // data增加类型注解
      list: ['小明', '小张', '小强'], // 要在template 中的使用 必须用ref包装一下
      selected: '',
      select: (index: number) => {
        data.selected = data.list[index]
      }
    })

    const refData = toRefs(data);
    

   return { // 将需要在 template 中使用的 变量 和方法暴露出去
     ...refData
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
