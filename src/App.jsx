import React from 'react';
import './App.css';
import { Container} from 'react-bootstrap';
import HeaderComponent from './components/HeaderComponent';
import SearchDisplay from './components/SearchDisplay';
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
    <Container className='mt-3'>
      <HeaderComponent />
      <SearchDisplay />
    </Container>
    <Navbar/>
    </>
  );
}

export default App;
