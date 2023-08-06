import type {FunctionalComponent} from "vue"
import { ref } from "vue"
const Hello:FunctionalComponent=()=>{
    const msg=ref("hello")
    return (
        <span class="title">{msg.value}</span>
    )
}
export default Hello