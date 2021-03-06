import React from "react";
import { ListGroup, Row, Col, Button, Container } from 'react-bootstrap';

const ListItem = ({ title, img, subtitle, author, pages, year, saveBook, state, id }) => {
    return (
        <ListGroup.Item className='p2'>
            <Container>
                <Row>
                    <Col xs={12} md={2} ><img style={{ minWidth: '100px', minHeight: '150px', backgroundColor: 'lightgray' }} className='rounded float-left border img-fluid' src={img} alt='Book cover' /></Col>
                    <Col xs={12} md={9} >
                        <Row className='m-auto'>
                            <p className='text-secondary mx-1'>{author ? `${author}` : ''}</p>
                            <p className='text-secondary mx-1'>{year ? `${year.substring(0, 4)}` : ''}</p>
                        </Row>
                        <Row className='ml-1'>
                            <h4 className='mr-2'>{title}</h4>
                            <h5>{subtitle}</h5>
                            <p className='text-secondary w-100'>{pages ? `pages: ${pages}` : ''}</p>
                        </Row>
                    </Col>
                    <Col xs={12} md={1} >
                        <Button onClick={() => saveBook(state => [...state, { title, img, subtitle, id }])}>+</Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>);
}

export default ListItem;