import { useReducer } from "react"

function reducerFunc(state,action){
    switch(action.name){
        case 'Antony':{
            return state.map((item)=>{
                if(item.name === action.name){
                    item.message = action.message
                }
                return item
            })
        }
        case 'Angie':{
            return state.map((item)=>{
                if(item.name === action.name){
                    item.message = action.message
                }
                return item
            })
        }
        case 'Lynn':{
            return state.map((item)=>{
                if(item.name === action.name){
                    item.message = action.message
                }
                return item
            })
        }
    }
}
function Chatbox(){
    const [state,dispatcher] = useReducer(reducerFunc,[{id:0, name:'Antony',message:''},{id:0, name:'Angie',message:''},{id:0, name:'Lynn',message:''}])
    return(
        <>
            <button 
                onClick={(e)=>{
                dispatcher(
                    {name:'Antony',
                    message:e.target.value
            })
            }}>Antony</button><br/>
            <button onClick={(e)=>{
                dispatcher({name:'Angie',message:e.target.value})
            }}>Angie</button><br/>
            <button 
                onClick={(e)=>{
                dispatcher({name:'Lynn',message:e.target.value})
            }}>Lynn</button><br/>
            <textarea 
                value={state[0].message} 
                onChange={
                    (e)=>{
                        dispatcher({name:state[0].name,message:e.target.value})
                    }
                }>
                </textarea><br/>
            <button>send to: {state[0].name}</button>
        </>
    )
}
export default Chatbox