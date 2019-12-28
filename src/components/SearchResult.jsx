import React, { useEffect, useState } from 'react';
import  ListGroup  from 'react-bootstrap/ListGroup';
import ListItem from './ListItem';

const SearchResult = ({ input }) => {
    
    const [result, loading] = useAsyncHook(input);

    return (
        <>
            {loading === true ? (
                <h3 className='text-secondary text-center mt-2'>Search for Books</h3>
            ) : loading === null ? (
                <h3>No Book Found</h3>
            ) : (
                <ListGroup className='mt-5'>
                    {result.map(item => (
                        <ListItem key={item.id} 
                            title={item.volumeInfo.title}
                            subtitle={item.volumeInfo.subtitle}
                            img={item.volumeInfo.imageLinks === undefined
                                ? ""
                                : `${item.volumeInfo.imageLinks.thumbnail}`}
                            author={item.volumeInfo.authors}
                            pages={item.volumeInfo.pageCount}
                            year={item.volumeInfo.publishedDate}
                        />
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

