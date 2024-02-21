import { useRef, useState } from "react"

function Calculator(){
    const result = useRef(null)
    const [input,setInput] = useState(0)
    function sum(e){
        e.preventDefault()
        setInput((prev)=>{
            return prev + Number(result.current.value)
        })
    }
    function substract(e){
        e.preventDefault()
        setInput((prev)=>{
            return prev - Number(result.current.value)
        })
    }
    function multiplication(e){
        e.preventDefault()
        setInput((prev)=>{
            return prev ** Number(result.current.value)
        })
    }
    function division(e){
        e.preventDefault()
        setInput((prev)=>{
            return prev / Number(result.current.value)
        })
    }
    return(
        <div>
            <form>
                <h3>Calculator</h3>
                <p >{Number(input)}</p>
                <input ref={result} type='number' />
                <button onClick={sum}>Sum</button>
                <button onClick={substract}>Substract</button>
                <button onClick={multiplication}>Multiplication</button>
                <button onClick={division}>Division</button>
            </form>
        </div>
    )
}
export default Calculator