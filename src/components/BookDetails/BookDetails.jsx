
import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast, Flip, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBook, wishlistBooks } from "../LocalStorage/localstorage";


export default function BookDetails() {

    const details = useLoaderData()
    console.log(details)
    const { id } = useParams()
    const idInt=parseInt(id);
    const book = details.find(detail => detail.bookId == id)

    return (
        <div className=" max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 p-8">
                <div className="">
                    <img className="w-full h-[570px] rounded-lg" src={book.image} alt="" />
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl text-black font-bold">{book.bookName}</h1>
                    <p><span className="font-semibold text-lg">By</span>: {book.author}</p>
                    <hr />
                    <p className="font-bold"> {book.category}</p>
                    <hr />
                    <div className="py-3 space-y-4">
                        <p><span className="font-semibold">Review</span>: {book.review}</p>
                        <div className="flex gap-4">{
                            book.tags.map((tag, idx) => <ul key={idx} className="bg-blue-100 text-blue-700 rounded-md px-3 py-1">#{tag}</ul>)
                        }</div>
                    </div>
                    <hr />
                    <div className="flex gap-28 items-center py-4">
                        <div className="space-y-2">
                            <p>Number of Pages: </p>
                            <p >Publisher:</p>
                            <p>Year of Publishing: </p>
                            <p>Rating:</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold">{book.totalPages}</p>
                            <p className="font-bold">{book.publisher}</p>
                            <p className=" font-bold  ">{book.yearOfPublishing}</p>
                            <p className=" font-bold ">{book.rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={() => { addBook(idInt) }} className="btn  bg-orange-400 text-white hover:bg-transparent hover:border-orange-400 hover:text-orange-700" >Read</button>
                        <button onClick={() => { wishlistBooks(idInt) }} className="btn bg-blue-400 text-white hover:bg-transparent hover:border-blue-400 hover:text-blue-700">Wishlist</button>
                    </div>
                </div>
            </div>


            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Flip />
        </div>
    )

}