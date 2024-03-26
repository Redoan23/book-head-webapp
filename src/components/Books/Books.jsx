import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Books({ book }) {

    const navigate = useNavigate()

    const { bookId, bookName, author, rating, image, review, category, tags } = book

    return (
        <div>
            <div onClick={() => { navigate(`/${bookId}`) }} className="shadow-md rounded-xl w-80 p-6 space-y-3">
                <div className="w-48"><img className="w-full rounded-xl" src={image} alt="" /></div>
                <div className="flex gap-2 text-blue-600 ">
                    {
                        tags.map((tag, idx)=> <ul key={idx} className="bg-blue-50 px-2 rounded-xl">{tag}</ul>)
                    }
                </div>
                <h3 className="text-xl font-bold">{bookName}</h3>
                <p className="opacity-95">By: {author}</p>
                <hr className="border-dashed" />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex items-center gap-3">{rating} <CiStar /></p>
                </div>
            </div>
        </div>
    )
}