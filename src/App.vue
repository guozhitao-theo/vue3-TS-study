<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="test">
    <div @click="select(index)" v-for="(item, index) in list" :key="index">
      {{index}} : {{item}}
    </div>
  </div>
  <div class="">{{a}}被选中的人是： {{selected}}</div>
  <div>
    <button @click="overAction">点餐完毕</button>
  </div>
  <div>{{overText}}</div>
</template>

<script lang="ts">
// Vue3 的生命周期在调用瘴气氨 需要线引入
import {
  reactive,
  toRefs,
  watch,
  ref,
} from 'vue';  // 使用reactive 优化代码； 使用 toRefs() 优化渲染的时候的 data
// vue3 的生命周期
/**
 * 1. setup() 开始创建组件之前，在 beforeCreate 和 created 之前执行。创建的是 data 和 methods
 * 2. onBeforeMount(): 组件挂在到节点上之前执行的函数
 * 3. onMounted(): 组件挂载完成后执行的函数
 * 4. onBeforeUpdate(): 组件更新完成之前的执行函数
 * 5. onUpdated(): 组件更新完成之后执行的函数
 * 6. onBeforeUnmout(): 组件卸载之前执行的函数
 * 7. onUnmounted(): 组件卸载之后执行的函数
 * 8. onActived(): 被包含在 ·<keep-alive>· 中的组件，会多出两个生命周期函数。被激活时执行。
 * 9. onDeactived(): 比如 从A 组件，切换到 B组件， A 组件消失的时候执行
 * 10. onErrorCaptured(): 当不会一个来自子孙组件的异常时激活钩子函数
 * 注： <keep-alive> 组件会将数据保存在内存中，比如我们不想每次看到一个页面都重新加载数据 就可以私用<keep-alive>组件解决
 */

// vue3新的钩子函数
/**
 * 1. onRenderTracked 状态跟踪，他会跟踪页面上所有的响应式变量和方法的状态
 * 2. onRenderTriggered 状态触发， 他不会跟踪每一个值，而是给你变化的信息，并且新值和旧值都会展示出来
 *    -- key 哪个变量发生了变化
 *    -- newValue 更新后变量的值
 *    -- oldValue 更新前变量的值
 *    -- target 目前页面中的响应变量和函数
 */
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
    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = overText.value + "点餐完成 | "
    }

    const refData = toRefs(data);
    watch([overText, () => data.selected], (newValue, oldValue) => { // 我想说的这并不是Bug，而是为了保持和Vue2的一致性，因为在Vue2中也时这种结果，解决方案是要么是ref或者这种get/set方法的形式。要么你你开启设置watchOptions的deep为true，也就是深度监听模式。
    console.log(`new--->${newValue}`);
    console.log(`old--->${oldValue}`);
    document.title = newValue[0];
  });

   return { // 将需要在 template 中使用的 变量 和方法暴露出去
     ...refData,
     overText,
     overAction
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
