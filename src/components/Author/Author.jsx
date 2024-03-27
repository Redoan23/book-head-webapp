import { useLoaderData } from "react-router-dom"

export default function Author() {
    const authors = useLoaderData()
    console.log(authors)
    return (
        <div className=" mt-20 bg-[url('https://i.ibb.co/ZHh64GS/1182.jpg')] w-full h-full bg-cover bg-no-repeat ">

            <div className="grid grid-cols-3 place-items-center gap-10 pt-10">
                {
                    authors.map(author =>
                        <div className="">
                            <div className="flex items-center gap-10 w-[350px] h-[120px] px-2 py-8 rounded-xl border-blue-500 border-2 bg-[#fff6]">
                                <div className="w-20">
                                    <img className=" rounded-xl" src={author.img} alt="" />
                                </div>
                                <div className="text-black space-y-1">
                                    <h1><span className="font-bold">Author:</span> {author.name}</h1>
  
                                    <p ><span className="font-bold">Country:</span> {author.location}</p>
                                    <hr />
                                    <p ><span className="font-bold">Best book:</span> <span className=" text-blue-400">{author.best_book}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}