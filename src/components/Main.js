import Btn from './btn.js';
function Main(props){
    let mainStyle = {
      color:'red',
      border:'solid'
    }
    return(
      <div style={mainStyle}>
        <h1>My name is {props.name} and i'm {props.age} years old. </h1>
        <Btn/>
      </div>
    ) 
  }
  export default Main