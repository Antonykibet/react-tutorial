import logo from './logo.svg';
import './App.css';
function Header(){
  return <h1>Header</h1>
}
function Main(props){
  return(
    <div>
      <h1>My name is {props.name} and i'm {props.age} years old. </h1>
    </div>
  ) 
}

function App() {
  return(
    <div>
      <Header/>
      <Main name='Anto' age='22' />
    </div>
  )
}

export default App;
