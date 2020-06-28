import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header.js';
import Main from './components/forms/forms'
import Footer from './components/footer/footer'
// const Header = () => {
//   return (

//     <header>
//       <h1>RESTy</h1>
//     </header>
    
//   );
// };


function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
