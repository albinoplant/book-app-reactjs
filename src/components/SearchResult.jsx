import React, { useEffect, useState } from 'react';

const googleKey = 'AIzaSyBnNiE0LUpiZ3xlGGDruTEnRDqbs13Jsa8';
const country = 'PL'

const SearchResult = ({input}) => {
    const [outcome, setOutcome] = useState();
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${input}&key=${googleKey}&country=${country}`)
        .then( res => res.json())
        .then( json => setOutcome(json))
        .catch( error => {console.log(error);return});
        });
    console.log(outcome);
    return ( 
        <>
        </>
     );
}
 
export default SearchResult;