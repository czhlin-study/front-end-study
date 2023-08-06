# hello

<button @click="hello">你好</button>
<Home/>

<script lang="ts" setup>
// import {hello} from "@/components/hello"
import Home from "@/views/Home.vue"
const hello=()=>console.log("hello")
</script>
