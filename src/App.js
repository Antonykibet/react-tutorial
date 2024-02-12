import Header from './components/Header.js';
import Main from './components/Main.js';
import Banner from './components/Banner.js';
import Counter from './components/Counter.js';
import Footer from './components/Footer.js';
import Form from './components/Form.js'
import './App.css';

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
      <Form/>
      <Footer discount={data.discount}/>
    </div>
  )
}

export default App;
