import { useEffect, useState } from "react";

function AvailableProducts({url,render}){
    const [data,setData] = useState([])
    useEffect(()=>{
        if(url.includes('mboga')){
            setData(['Cabbage','Saga','spinach','kales'])
        }else{
            setData(['rice','ugali','spagheti','ndengu'])
        }
    },[url])
    return render(data)
}
function AvailableMboga(){
   return (
    <AvailableProducts url='https://chuom/mboga' render={(data)=>(
        <div>
            <h1>Available Vegetables</h1>
            <ul>
                {data.map((item)=><li>{item}</li> )}
            </ul>
        </div>
   )}/>
   )
}
function AvailableFood(){
    return(
        <AvailableProducts url='https://chuom/food' render={(data)=>(
        <div>
            <h1>Available  Food</h1>
            <ul>
                {data.map((item)=><li>{item}</li> )}
            </ul>
        </div>
    )}/>
    )
}
export default function TodaysMenu(){
    return(
        <div>
            <AvailableMboga/>
            <AvailableFood/>
        </div>
    )
}