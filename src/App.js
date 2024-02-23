import {Routes, Route, Link} from 'react-router-dom'
import { useContext, useState } from 'react';

import { userContext } from "./contexts"
import Home from './components/Home.js'
import About from './components/About.js'
import ContextExample from './components/ContextExample.js';
import RandomUsers from './components/RandomUsers.js';

import './App.css';


function App() {
  const [username] = useState('Antony')
  return(
    <userContext.Provider value={username}>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/context'>Context API</Link>
        <Link to='/randomUsers'>Random Users</Link>
        <div>Logged in as {useContext(userContext)}</div>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/context' element = {<ContextExample/>}/>
        <Route path='/randomUsers' element = {<RandomUsers/>}/>
      </Routes>
    </userContext.Provider>
  )
}

export default App;
