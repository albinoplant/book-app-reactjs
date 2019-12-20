import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './components/HeaderComponent';
import SearchResult from './components/SearchResult';



function App() {
  return (
    <Container className='mt-3'>
      <HeaderComponent />
      <SearchResult />
    </Container>
  );
}

export default App;
