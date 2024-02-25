import { useReducer } from "react"
function reducerFunc(state,action){
    switch(action.name){
        case 'Antony':{
            return [...state,{name:'Antony'}]
        }
        case 'Angie':{
            return [...state,{name:'Angie'}]
        }
        case 'Lynn':{
            return [...state,{name:'Lynn'}]
        }
    }
}
function Chatbox(){
    const [state,dispatcher] = useReducer(reducerFunc,{id:0, name:'Antony'})
    return(
        <>
            <button onClick={()=>{
                dispatcher({name:'Antony'})
            }}>Antony</button>
            <button onClick={()=>{
                dispatcher({name:'Angie'})
            }}>Angie</button>
            <button 
                onClick={()=>{
                dispatcher({name:'Lynn'})
            }}>Lynn</button>
            <textarea >Hello</textarea>
            <button>send to: {state.name}</button>
        </>
    )
}
export default Chatbox