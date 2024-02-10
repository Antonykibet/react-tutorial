import Btn from './btn.js';
import './App.css';
function Header(){
  return <h1>Header</h1>
}
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

function App() {
  function sayHi(){
    alert('Wozaa!')
  }
  return(
    <div>
      <Header/>
      <Main onClick={sayHi} name='Anto' age='22' />
    </div>
  )
}

export default App;
