import {Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header.js';
import Main from './components/Main.js';
import Banner from './components/Banner.js';
import Counter from './components/Counter.js';
import Footer from './components/Footer.js';
import Form from './components/Form.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Meals from './components/meals.js';
import './App.css';

function App() {
  const data={
    discount:'20%'
  }
  return(
    <div>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      <Header/>
      <Banner discount={data.discount} />
      <Main name='Anto' age='22' />
      <Counter/>
      <Form/>
      <Meals/>
      <Footer discount={data.discount}/>
    </div>
  )
}

export default App;
