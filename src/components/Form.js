import { useState } from "react";

function Form(){
    const [inputs,setInputs] = useState('Anto')
    function handleChange(event){
        setInputs(event.target.value)
    }
    return(
        <form>
            <label>Enter details:</label>
            <input type="text" name="frstName" value={inputs} onChange={(event)=>handleChange(event)}/>
            <input type="text" name="age" value='30'/>
            <input type="submit" />
        </form>
    )
}
export default Form