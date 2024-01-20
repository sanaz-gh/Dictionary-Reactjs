import React, { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";



const handleLikedList = (book, status) => {

const [liked, setLiked] = useState([]);

if (status) {
    const newLikedList = liked.filter((i)=> i.id !== book.id);
    setLiked(newLikedList);
}
else {
    setLiked((liked) => [...liked, book]);
}
};

const Books = () => {
    return(
        <>
        {books.map( (book) => (<BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>))}
        </>
    )
}
export default Books;