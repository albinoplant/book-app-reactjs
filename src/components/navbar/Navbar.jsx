import React,{useState} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import './navbar.css';
import SavedList from './SavedList'


const SideNavbar = ({savedList}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    
    return (
        <>
        <Button onClick={()=>setShowNavbar(true)} variant='outline-secondary' style={{cursor:'pointer', height:'10em',position:'fixed',left:'-10px', top:'50vh'}}>&#9776;</Button>
        <CSSTransition
            in={showNavbar}
            timeout={300}
            classNames='sidenav'
            unmountOnExit
        >
        <aside className='sidenav shadow' style={styles}>
            <Container>
            <Row className='m-3'>
                <Col className='col-9'/>
                <Col className='col-3'>
                <Button className='' variant="outline-secondary" onClick={()=>setShowNavbar(false)}>&times;</Button>
                </Col>
            </Row>
            <SavedList savedList={savedList} />
            </Container>
        </aside>
        </CSSTransition>
        </>
    );
}
export default SideNavbar;


const styles = {
    height: '100%',
    width: '300px',
    position: 'fixed',
    zIndex: '10',
    top: '0',
    left: '0',
    backgroundColor: '#FFF',
    overflowX: 'hidden',
}