import React from 'react';
import './style.css'
import Calendar from './class-components';
import { Header, Content, Footer } from './func-component';

function App(){
  
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <h2>DeveloperThai.com</h2>
    <div className='title'>
      React & React Native
    </div>
    <Content/>
    <Footer/>
    </>
  )
}
export default App;