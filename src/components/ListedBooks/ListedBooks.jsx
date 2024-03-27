import { IoMdPeople } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { useEffect, useState } from "react"
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom"
import { getBook } from "../LocalStorage/localstorage"

export default function ListedBooks() {
    const [readBooks, setReadBooks] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        const stored = getBook()
        if (data.length > 0) {
            const booksRead = data.filter(dt => stored.includes(dt.bookId))
            setReadBooks(booksRead)
        }
    }, [])

    return (

        <div>
            <div className="text-2xl text-center font-bold bg-gray-100 py-3 mt-10">Books</div>
            <div className="mt-16">

                <section>
                    <div className="space-y-10 mt-20">
                        {
                            readBooks.map(book =>
                                <div className="flex flex-col lg:flex-row gap-16 shadow-lg rounded-lg p-5">
                                    <div className="w-64">
                                        <img className="rounded-xl " src={book.image} alt="" />
                                    </div>
                                    <div className="space-y-5">
                                        <h2 className=" text-2xl font-bold">{book.bookName}</h2>
                                        <p className=" font-bold">By: {book.author}</p>
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            <p className="flex gap-3">{book.tags.map(tag => <ul className="px-2 bg-blue-100 text-blue-500 rounded-md">{tag}</ul>)}</p>
                                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-7">
                                            <p className="flex gap-1 items-center"><IoMdPeople /> publisher: {book.publisher}</p>
                                            <p className="flex gap-1 items-center"> <SlDocs /> Pages: {book.totalPages}</p>
                                        </div>
                                        <hr />
                                        <div className="flex gap-2 lg:gap-4 items-center">
                                            <p className=" rounded-xl bg-green-50 px-1 lg:px-2 text-green-600 py-2 lg:py-3">category:{book.category}</p>
                                            <p className="rounded-xl bg-orange-100 text-orange-400 px-1 lg:px-2 py-2 lg:py-3">Rating: {book.rating}</p>
                                            <Link to={`/${book.bookId}`}><button className="btn text-white bg-green-500 rounded-xl">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>

    )
}