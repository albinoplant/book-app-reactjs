import React, {useState} from 'react';
import './App.css';
import { Container} from 'react-bootstrap';
import HeaderComponent from './components/HeaderComponent';
import SearchDisplay from './components/SearchDisplay';
import Navbar from './components/navbar/Navbar'


function App() {

  const [saved, setSaved] = useState([]);
  console.log(saved);
  return (
    <>
    <Container className='mt-3'>
      <HeaderComponent  />
      <SearchDisplay add={setSaved} state={saved} />
    </Container>
    <Navbar savedList={saved} remove={setSaved} />
    </>
  );
}

export default App;
