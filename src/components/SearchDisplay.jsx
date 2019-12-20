import React, {useState} from 'react';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";


const SearchDisplay = () => {
    const [input, setInput] = useState('Harry Potter');

    return ( 
        <>
            <SearchInput typing={setInput} />
            <SearchResult input={input} />
        </>
     );
}
 
export default SearchDisplay;