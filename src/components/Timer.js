import { useRef, useState } from "react";
function Timer(){
    const intervalRef = useRef(0)
    const [counter, setCounter] = useState(0)
    function handleStartClick() {
        const intervalId = setInterval(() => {
          setCounter((prevValue)=>{
           return Number(prevValue+=1)
          })
        }, 1000);
        intervalRef.current = intervalId;
      }
      function handleStopClick() {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);
      }
    return(
        <div>
            <h1>Stopwatch</h1>
            <input value={counter}/>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </div>
    )
}
export default Timer