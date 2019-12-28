import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './components/HeaderComponent';
import SearchDisplay from './components/SearchDisplay';



function App() {
  return (
    <Container className='mt-3'>
      <HeaderComponent />
      <SearchDisplay />
    </Container>
  );
}

export default App;
