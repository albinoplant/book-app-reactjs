import React from "react";
import { ListGroup, Row, Col } from 'react-bootstrap';

const ListItem = ({ title, img, subtitle, author, pages, year }) => {
    return (
        <ListGroup.Item className='p2'>
            <Row>
                <Col className='col-2'><img style={{ minWidth: '100px', minHeight: '150px', backgroundColor: 'lightgray' }} className='rounded float-left border img-fluid' src={img} alt='Book cover' /></Col>
                <Col className='col-10'>
                    <Row className='m-auto'>
                        <p className='text-secondary mx-1'>{author?`${author}`:''}</p>
                        <p className='text-secondary mx-1'>{year.substring(0,4)}</p>
                    </Row>
                    <Row className='ml-1'>
                        <h4 className='mr-2'>{title}</h4>
                        <h5>{subtitle}</h5>
                        <p className='text-secondary w-100'>pages: {pages}</p>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>);
}

export default ListItem;