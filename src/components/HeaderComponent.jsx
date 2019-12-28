import React,{useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import  PopToast  from './PopToast';

const HeaderComponent = () => {

    const [ show, setShow ] = useState(false);
    return ( 
        <>
            <Jumbotron className='border '>
                <h1 className='display-4'>Welcome to BookSearch app</h1>
                <p className='text-secondary'>
                    With this app you can build a collection of your favourie books!
                    You can also save positions to your reading queue.
                </p>
                <Button onClick={()=>setShow(!show)}>About me</Button>
                <PopToast show={show}/>
            </Jumbotron>

        </>
     );
}
 
export default HeaderComponent;