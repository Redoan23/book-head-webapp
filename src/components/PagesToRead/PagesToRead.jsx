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
        <div className="mx-auto max-w-screen-2xl flex justify-center mt-28 ">
            <div>
                <BarChart width={1000} height={500} data={filteredBooks}>
                    <CartesianGrid strokeDasharray="10 3" />
                    <YAxis dataKey="totalPages" />
                    <XAxis dataKey="bookName" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="BookName" fill="#8884d8" />
                    <Bar dataKey="totalPages" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    )
}