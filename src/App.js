import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} exact={true}/>
          <Route path="/about" element={<About/>} exact={true} />
          <Route path="/movie-detail" element={<Detail/>} exact={true} />
        </Routes>
      </HashRouter>
  )
}

export default App;