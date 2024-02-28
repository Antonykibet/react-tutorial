import { useReducer, useRef } from "react"

function reducerFunc(state,action){
    switch(action.name){
        case 'Antony':{
            return state.map((item)=>{
                item.selected=false
                if(item.name === action.name){
                    item.message = action.message
                    item.selected=true
                }
                return item
            })
        }
        case 'Kibet':{
            return state.map((item)=>{
                item.selected=false
                if(item.name === action.name){
                    item.message = action.message
                    item.selected=true
                }
                return item
            })
        }
        case 'Ruto':{
            return state.map((item)=>{
                item.selected=false
                if(item.name === action.name){
                    item.message = action.message
                    item.selected=true
                }
                return item
            })
        }
    }
}
function Chatbox(){
    const [state,dispatcher] = useReducer(reducerFunc,[{id:0, name:'Antony',message:'fdfdf',selected:false},{id:0, name:'Kibet',message:'',selected:false},{id:0, name:'Ruto',message:'',selected:false}])
    const textInput = useRef(null)
    return(
        <>
            <button 
                onClick={(e)=>{
                state.forEach((item)=>{
                    if(item.name===e.target.innerText){ 
                        textInput.current.value = item.message
                    }
                })
                dispatcher({
                        name:'Antony',
                        message:textInput.current.value
                    }
                )
            }}>Antony</button><br/>
            <button onClick={(e)=>{
                state.forEach((item)=>{
                    if(item.name===e.target.innerText){
                        textInput.current.value = item.message
                    }
                })
                dispatcher({name:'Kibet',message:textInput.current.value})
            }}>Kibet</button><br/>
            <button 
                onClick={(e)=>{
                    state.forEach((item)=>{
                        if(item.name===e.target.innerText){
                            textInput.current.value = item.message
                        }
                    }) 
                dispatcher({name:'Ruto',message:textInput.current.value})
            }}>Ruto</button><br/>
            <textarea 
                ref={textInput}
                value={state.forEach(item=>{
                    if(item.selected === true){
                        return item.message
                    }
                })} 
                onChange={
                    (e)=>{
                        state.forEach((item)=>{
                            if(item.selected === true){
                                dispatcher({name:item.name,message:e.target.value})
                            }
                        })
                    }
                }>
                </textarea><br/>
            <button>send to: {state.forEach(item=>{
                if(item.selected === true){
                    console.log(state)
                    return item.name
                }
            })
            }</button>
        </>
    )
}
export default Chatbox