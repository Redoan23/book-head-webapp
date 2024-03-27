import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, ResponsiveContainer } from "recharts";
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
            <div className="lg:w-[1400px] mx-auto flex justify-center w-96">
                <ResponsiveContainer width='80%' height={500}>
                    <BarChart  data={filteredBooks}>
                        <CartesianGrid strokeDasharray="7 3" />
                        <YAxis dataKey="totalPages" />
                        <XAxis dataKey="bookName" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="bookName" fill="coral" />
                        <Bar dataKey="totalPages" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}