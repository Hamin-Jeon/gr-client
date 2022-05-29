import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Home,SignUp,Test } from './pages';
// import Home from './pages/Home'
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
