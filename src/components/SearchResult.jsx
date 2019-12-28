import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';


const SearchResult = ({ input }) => {
    
    const [result, loading] = useAsyncHook(input);

    return (
        <>
            {loading === true ? (
                <h1>Search for Books</h1>
            ) : loading === null ? (
                <h1>No Book Found</h1>
            ) : (
                <ListGroup>
                    {result.map(item => (
                        <ListGroup.Item key={item.id} >{item.volumeInfo.title}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </>
    );
}

export default SearchResult;

function useAsyncHook(searchBook) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBookList() {
            try {

                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
                );
                const json = await response.json();
                console.log(json.items);
                setLoading(false);
                setResult(json.items);
            } catch (error) {
                setLoading(null);
            }
        }

        if (searchBook) {
            fetchBookList();
        }

    }, [searchBook]);

    return [result, loading];
}

