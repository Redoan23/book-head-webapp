import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

export default function BookDetails() {

    const details = useLoaderData()
    console.log(details)
    const { id } = useParams()
    const book = details.find(detail => detail.bookId == id)
    console.log(book)

    const notify = () => toast("Wow so easy !");


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
                        <button className="btn  bg-orange-400 text-white hover:bg-transparent hover:border-orange-400 hover:text-orange-700" onClick={notify}>Read</button>
                        <button className="btn bg-blue-400 text-white hover:bg-transparent hover:border-blue-400 hover:text-blue-700">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
            
        </div>
    )
}