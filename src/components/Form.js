import { useState } from "react";

function Form(){
    const [inputs,setInputs] = useState({frstName:'',age:'',year:''})
    function handleChange(e){
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    function formSubmision(e){
        e.preventDefault()
        console.log(inputs)
    }
    return(
        <>
            <h3>Form</h3>
            <form onSubmit={formSubmision}>
                <label>Enter details:</label><br/>
                <input type="text" name="frstName" placeholder="Name" value={inputs.frstName} onChange={(event)=>handleChange(event)}/> <br/>
                <input type="text" name="age" placeholder="Age" value={inputs.age} onChange={(event)=>handleChange(event)}/><br/>
                <input type="text" name="year" placeholder="Year" value={inputs.year} onChange={(event)=>handleChange(event)}/><br/>
                <input type="submit" />
            </form>
        </>
    )
}
export default Form