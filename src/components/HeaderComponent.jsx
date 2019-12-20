import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import SearchDisplay from './SearchDisplay';

const HeaderComponent = () => {
    return ( 
        <>
            <Jumbotron className='border '>
                <h1>Welcome to BookSearch app</h1>
                <p className='text-secondary'>
                    With this app you can build a collection of your favourie books!
                    You can also save positions to your reading queue.
                </p>
                <Button>About me</Button>
            </Jumbotron>
            <SearchDisplay/>
        </>
     );
}
 
export default HeaderComponent;