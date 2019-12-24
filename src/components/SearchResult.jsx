import React, { useEffect, useState } from 'react';


const SearchResult = ({ input }) => {

    const [result, loading] = useAsyncHook(input);

    return (
        <>
            {loading === "false" ? (
                <h1>Search for Books</h1>
            ) : loading === "null" ? (
                <h1>No Book Found</h1>
            ) : (
                result.map(item => {
                    return <p>{item.title}</p>;
                })
            )}
        </>
    );
}

export default SearchResult;

function useAsyncHook(searchBook) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState("false");

    useEffect(() => {
        async function fetchBookList() {
            try {
                setLoading("true");
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
                );
                const json = await response.json();
                setResult(
                    json.items.map(item => {
                        return item.volumeInfo;
                    })
                );
            } catch (error) {
                setLoading("null");
            }
        }

        if (searchBook !== "") {
            fetchBookList();
        }
    }, [searchBook]);

    return [result, loading];
}

