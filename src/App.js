import Btn from './btn.js';
import ThemeToggler from './theme.js';
import Banner from './Banner.js';
import Counter from './Counter.js';
import Footer from './Footer.js';
import './App.css';
function Header(){
  return(
    <div>
      <h1>Header</h1>
      <ThemeToggler/>
    </div>
  ) 
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
    alert('Hello')
  }
  const data={
    discount:'20%'
  }
  return(
    <div>
      <Header/>
      <Banner discount={data.discount} />
      <Main onClick={sayHi} name='Anto' age='22' />
      <Counter/>
      <Footer discount={data.discount}/>
    </div>
  )
}

export default App;
