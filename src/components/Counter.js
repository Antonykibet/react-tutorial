import  {useState} from "react";
function Counter(){
    const [count,setCount] = useState(4)
    function increement(){
        setCount(count+1)
    }
    function decreement(){
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={decreement}>-</button>
            <span>{count}</span>
            <button onClick={increement}>+</button>
        </div>
    )
}
export default Counter