import React , { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const SearchInput = ({ typing }) => {
    const [ written, setWritten] = useState();
    return (

            <InputGroup >
                <InputGroup.Prepend>
                    <Button onClick={()=>(typing(written))} variant="primary">Search</Button>
                </InputGroup.Prepend>
                <FormControl
                    onKeyUp={(event)=> (event.key==='Enter') && typing(written)}
                    onChange={(event) => (setWritten(event.target.value))}
                    aria-describedby=''
                    placeholder="Enter book's name..."
                />
            </InputGroup>

    );
}

export default SearchInput;