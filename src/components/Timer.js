function Timer(){
    function handleStartClick() {
        const intervalId = setInterval(() => {
          // ...
        }, 1000);
        intervalRef.current = intervalId;
      }
      function handleStopClick() {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);
      }
    return(
        <div>
            
        </div>
    )
}