import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts";
import { getBook } from "../LocalStorage/localstorage";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";







export default function PagesToRead() {

    // const [bookData, setBookData] = useState([])
    // console.log(bookData)

    const stored = getBook()
    console.log(stored)
    const loadingData = useLoaderData()
    console.log(loadingData)
    const filteredBooks = loadingData.filter(data => stored.includes(data.bookId))
    console.log(filteredBooks)





    return (
        <div>
            {
                filteredBooks.map(book => <BarChart width={730} height={250} data={book}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={book.bookName} />
                    <YAxis dataKey={book.totalPages} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="book name" fill="#8884d8" />
                    <Bar dataKey="read pages" fill="#82ca9d" />
                </BarChart>)
            }
        </div>
    )
}