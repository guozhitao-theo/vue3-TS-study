// axios 封装
import { ref } from 'vue';
import axios from 'axios';

function userUrlAxios(url: string) {
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  axios.get(url).then((res) => {
    loading.value = false
    loaded.value = true
    console.log(loaded.value)
    result.value = res.data
  }).catch( e => {
    error.value = e
    loading.value = false
  })
  return {
    result,
    loading,
    loaded,
    error
  }
}
export default userUrlAxios