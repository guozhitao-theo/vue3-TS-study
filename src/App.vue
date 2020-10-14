<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机出现一张狗狗的照片</div>
    <div v-if="loading">loading.....</div>
    <img class="img" v-if="loaded" :src="result.message" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, watch } from "vue";
import useURLAxios from '@/hooks/useURLAxios'
import userUrlAxios from '@/hooks/useURLAxios';
const app = {
  name: "App",
  setup() {
    const { result, loading, loaded } = userUrlAxios("https://dog.ceo/api/breeds/image/random");
    console.log(loaded)

    return {result, loading, loaded};
  },
};
export default app;
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
.img {
  width: 200px;
  height: 200px;
}
</style>
