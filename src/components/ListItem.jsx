import React from "react";
import  {ListGroup}  from 'react-bootstrap';

const ListItem = ({ title, img}) => {
    return ( 
        <ListGroup.Item>
            <img className='rounded float-left border' src={img} alt='Book cover'/>
            <h1>{title}</h1>
        
        </ListGroup.Item> );
}
 
export default ListItem;