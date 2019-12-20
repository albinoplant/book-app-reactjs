import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



const SearchInput = ({typing}) => {
    return (  
        <>
            <InputGroup>
                <FormControl
                    onChange={(event)=>(typing(event.target.value))}
                    aria-describedby=''
                    placeholder="Enter book's name..."
                />
            </InputGroup>
        </>
    );
}
 
export default SearchInput;