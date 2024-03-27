import { useLoaderData } from "react-router-dom"

export default function Author() {
    const authors = useLoaderData()
    console.log(authors)

    const handleClick=(name)=>{
        const url=`https://www.google.com/search?q=${name}`
        // window.location.href = url
        // window.open(url, '_blank')
    }

    return (
        <div>
            
            <div className=" bg-[url('https://i.ibb.co/ZHh64GS/1182.jpg')] w-full h-full bg-cover bg-no-repeat ">
<div className="pt-10"><h1 className="bg-[#0af9] text-white text-center py-5 text-4xl font-bold ">Here is Some of Our Best Authors</h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-7 pt-20">
                    {
                        authors.map(author =>
                            <div className=" hover:cursor-pointer" onClick={()=>{handleClick(author.name)}}>
                                <div className="flex items-center gap-5 w-[350px] lg:w-[350px] h-[120px] px-2 py-8 rounded-xl border-blue-500 border-2 bg-[#fff3] shadow-xl">
                                    <div className="w-20">
                                        <img className=" rounded-xl" src={author.img} alt="" />
                                    </div>
                                    <div className="text-black space-y-1 w-80">
                                        <h1><span className="font-bold">Author:</span> {author.name}</h1>

                                        <p ><span className="font-bold">Country:</span> {author.location}</p>
                                        <hr />
                                        <p ><span className="font-bold">Best book:</span> <span className=" text-sky-300 shadow-sm drop-shadow-md">{author.best_book}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}