// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import Practice from './page/practice';
import { useState } from 'react';
// import ModalToggler from './components/ModalToggler';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AppRouter from './Router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter> 
      <div className="app-wrapper">
        <Header /> 
        
        <AppRouter /> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;