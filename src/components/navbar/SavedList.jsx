import React from 'react';
import { ListGroup, Col, Row, Container, Button } from 'react-bootstrap';

const SavedList = ({ savedList, remove }) => {
    return (
        <>
            <ListGroup className='mt-5'>
                {savedList.map((item, i) => (
                    <ListGroup.Item key={item.id}>
                        <Container>
                            <Row>
                                <Col xs={5}>
                                    <img className='img-fluid ' src={item.img === undefined
                                        ? ""
                                        : `${item.img}`}
                                        alt='Book cover'
                                    />
                                </Col>
                                <Col xs={6}>
                                    <p>{item.title}
                                        <span>{item.subtitle === undefined
                                            ? ""
                                            : ` ${item.subtitle}`}</span></p>
                                </Col>
                                <Col xs={1}>
                                    <Button onClick={
                                        () => {remove(savedList.filter((it, index) => index !== i))}}>-</Button>
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