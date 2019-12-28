import React from 'react';
import { ListGroup, Col, Row, Container } from 'react-bootstrap';

const SavedList = ({ savedList }) => {
    return (
        <>
            <ListGroup className='mt-5'>
                {savedList.map(item => (
                    <ListGroup.Item key={item.id}>
                        <Container>
                            <Row>
                                <Col className='col-6'>
                                    <img className='img-fluid ' src={item.img === undefined
                                        ? ""
                                        : `${item.img}`}
                                        alt='Book cover'
                                    />
                                </Col>
                                <Col className='col-6'>
                                    <p>{item.title}
                                        <span>{` ${item.subtitle}`}</span></p>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default SavedList;