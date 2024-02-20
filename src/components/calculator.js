import { useState } from "react"
function Calculator(){
    const [display, setDisplay] = useState(0)
    const [input,setInput] = useState(0)
    const [result,setResult] = useState(0)
    function updateDisplays(e){
        setDisplay(e.target.value)
    }
    function sum(){
        
        setResult(display+input)
    }
    return(
        <div>
            <input type="text" value={display}/>
            <input type="text" value={input} onChange={updateDisplays} />
            <input type="text" value={result} />
            <button onClick={sum}>Sum</button>
            <button>Substract</button>
            <button>Multiplication</button>
            <button>Division</button>
        </div>
    )
}
export default Calculator