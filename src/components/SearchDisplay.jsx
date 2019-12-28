import React, {useState} from 'react';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";


const SearchDisplay = ({add, state}) => {
    const [input, setInput] = useState();

    return ( 
        <>
            <SearchInput typing={setInput} />
            <SearchResult add={add} state={state} input={input} />
        </>
     );
}
 
export default SearchDisplay;