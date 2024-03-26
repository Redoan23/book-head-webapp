export default function Banner() {

    return (
        <div className=" mt-10">
            <div className="bg-gray-100 w-[100vw] h-[600px] bg-cover bg-no-repeat rounded-xl max-w-screen-2xl mx-auto">

                <div className="flex lg:flex-row flex-col gap-10 items-center p-16">
                    <div className="flex-1 space-y-10" >
                        <h2 className="text-black text-5xl font-bold">Books to freshen up your bookshelf</h2>
                        <button className="btn bg-blue-400 text-white">View The List</button>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/MMFfyJx/34444444fsdf-fotor-bg-remover-2r024032605632.png" alt="" />
                    </div>
                </div>

            </div>


        </div>
    )
}