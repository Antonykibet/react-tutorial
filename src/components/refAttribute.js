import { useRef } from "react";
function Focus(){
    const inputElem = useRef(null)
    function focusElem(){
        inputElem.current.focus()
    }
    return(
        <div>
            <h3>Ref attribute</h3>
            <input ref={inputElem}/>
            <button onClick={focusElem}> Focus on element</button>
        </div>
    )
}
export default Focus