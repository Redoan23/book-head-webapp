import { IoMdPeople, IoMdArrowDropdownCircle } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { useEffect, useState } from "react"
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom"
import { getBook, getWishlist } from "../LocalStorage/localstorage"

// material ui



import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {

    // old stuffdfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    const [sorted, setSorted] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        setSorted(data)
        const stored = getBook()
        const wishlist = getWishlist()
        if (data.length > 0) {
            const booksRead = data.filter(dt => stored.includes(dt.bookId))
            setReadBooks(booksRead)
        }
        if (data.length > 0) {
            const wishlistBook = data.filter(dt => wishlist.includes(dt.bookId))
            setWishlistBooks(wishlistBook)
        }

    }, [])

    const handleSort = (finder) => {
        if (finder === "none") {
            const sortedData = [...sorted]
            setReadBooks(sortedData)
            setWishlistBooks(sortedData)
        }
        if (finder === "rating") {
            const sortedData = [...sorted].sort((a, b) => b.rating - a.rating)
            setReadBooks(sortedData)
            setWishlistBooks(sortedData)
        }
        if (finder === "totalPages") {
            const sortedData = [...sorted].sort((a, b) => b.totalPages - a.totalPages)
            setReadBooks(sortedData)
            setWishlistBooks(sortedData)
        }
        if (finder === "yearOfPublishing") {
            const sortedData = [...sorted].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setReadBooks(sortedData)
            setWishlistBooks(sortedData)
        }

    }

    // old stuffdsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div>
            <div className="text-2xl text-center font-bold bg-gray-100 py-3 mt-10">Books</div>
            <div className="mx-auto flex justify-center mt-5">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By <IoMdArrowDropdownCircle /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => { handleSort('none') }}>Default</a></li>
                        <li><a onClick={() => { handleSort('rating') }}>Rating</a></li>
                        <li><a onClick={() => { handleSort('totalPages') }}>Number of Pages</a></li>
                        <li onClick={() => { handleSort('yearOfPublishing') }}><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="lg:px-5">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Read Books" {...a11yProps(0)} />
                            <Tab label="Wishlist Books" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div>
                            <div className="mt-16">
                                <section>
                                    <div className="space-y-10 mt-20">
                                        {
                                            readBooks.map( book =>
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
                                                            <p className=" rounded-xl bg-green-50 px-1 lg:px-2 border-2 border-green-400 text-green-600 py-2 lg:py-3">category:{book.category}</p>
                                                            <p className="rounded-xl bg-orange-100 border-2 border-orange-400 text-orange-400 px-1 lg:px-2 py-2 lg:py-3">Rating: {book.rating}</p>
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
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <div>
                            <div className="mt-16">

                                <section>
                                    <div className="space-y-10 mt-20">
                                        {
                                            wishlistBooks.map(book =>
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
                                                            <p className=" rounded-xl bg-green-50 px-1 lg:px-2 border-2 border-green-400 text-green-600 py-2 lg:py-3">category:{book.category}</p>
                                                            <p className="rounded-xl bg-orange-100 border-2 border-orange-400 text-orange-400 px-1 lg:px-2 py-2 lg:py-3">Rating: {book.rating}</p>
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
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
    );
}


// material ui ends here



//  this below is my old data

// export default function ListedBooks() {
//     const [readBooks, setReadBooks] = useState([])
//     const data = useLoaderData()
//     useEffect(() => {
//         const stored = getBook()
//         if (data.length > 0) {
//             const booksRead = data.filter(dt => stored.includes(dt.bookId))
//             setReadBooks(booksRead)
//         }
//     }, [])

//     return (

// <div>
//     <div className="text-2xl text-center font-bold bg-gray-100 py-3 mt-10">Books</div>
//     <div className="mt-16">

//         <section>
//             <div className="space-y-10 mt-20">
//                 {
//                     readBooks.map(book =>
//                         <div className="flex flex-col lg:flex-row gap-16 shadow-lg rounded-lg p-5">
//                             <div className="w-64">
//                                 <img className="rounded-xl " src={book.image} alt="" />
//                             </div>
//                             <div className="space-y-5">
//                                 <h2 className=" text-2xl font-bold">{book.bookName}</h2>
//                                 <p className=" font-bold">By: {book.author}</p>
//                                 <div className="flex flex-col lg:flex-row gap-6">
//                                     <p className="flex gap-3">{book.tags.map(tag => <ul className="px-2 bg-blue-100 text-blue-500 rounded-md">{tag}</ul>)}</p>
//                                     <p>Year of Publishing: {book.yearOfPublishing}</p>
//                                 </div>
//                                 <div className="flex flex-col lg:flex-row gap-7">
//                                     <p className="flex gap-1 items-center"><IoMdPeople /> publisher: {book.publisher}</p>
//                                     <p className="flex gap-1 items-center"> <SlDocs /> Pages: {book.totalPages}</p>
//                                 </div>
//                                 <hr />
//                                 <div className="flex gap-2 lg:gap-4 items-center">
//                                     <p className=" rounded-xl bg-green-50 px-1 lg:px-2 border-2 border-green-400 text-green-600 py-2 lg:py-3">category:{book.category}</p>
//                                     <p className="rounded-xl bg-orange-100 border-2 border-orange-400 text-orange-400 px-1 lg:px-2 py-2 lg:py-3">Rating: {book.rating}</p>
//                                     <Link to={`/${book.bookId}`}><button className="btn text-white bg-green-500 rounded-xl">view details</button></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </section>
//     </div>
// </div>

//     )
// }