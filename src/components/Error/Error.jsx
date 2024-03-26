import { useNavigate, useRouteError } from "react-router-dom"


export default function Error() {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center gap-10 absolute top-52 left-[50%]">
            <i>{`fatal error ${error.status}`}</i>

            {
                error.status === 404 && <div>
                    <p>page not found</p>
                    <button onClick={handleNavigate} >Go Back</button>
                </div>
            }

            <button className="btn text-center" onClick={handleNavigate}>Go back?</button>
        </div>
    )
}