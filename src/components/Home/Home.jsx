import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import BookDetails from "../BookDetails/BookDetails";
import { useLoaderData } from "react-router-dom";

export default function Home() {


    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch('public/books/books.json')
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [])

    const books= useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="max-w-screen-2xl mx-auto mt-24">
                    <h1 className="text-center font-bold text-3xl text-black pb-10">Books</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-2 place-items-center">
                        {
                            books.map(book => <Books key={book.bookId} book={book}></Books>)
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}