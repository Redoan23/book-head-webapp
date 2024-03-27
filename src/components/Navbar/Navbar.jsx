import { NavLink } from "react-router-dom"
import './navbar.css'

export default function Navbar() {

    const links = <>
        <li><NavLink className="border-2 border-[#38bdf8] p-2 rounded-lg text-[#2563eb] bg-transparent" to='/'>Home</NavLink></li>
        <li><NavLink className="border-2 border-[#38bdf8] p-2 rounded-lg text-[#2563eb] bg-transparent" to='/listedbooks'>Listed Books</NavLink></li>
        <li><NavLink className="border-2 border-[#38bdf8] p-2 rounded-lg text-[#2563eb] bg-transparent" to='/pagestoread'>Pages to Read</NavLink></li>
        <li><NavLink className="border-2 border-[#38bdf8] p-2 rounded-lg text-[#2563eb] bg-transparent" to='/offers&discounts'>Offers & Discounts</NavLink></li>
        <li><NavLink className="border-2 border-[#38bdf8] p-2 rounded-lg text-[#2563eb] bg-transparent" to='/authors'>Authors</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Book Head</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-3 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn w-16 lg:w-24 bg-green-400 text-white rounded-md hover:bg-transparent hover:text-green-700 hover:border-green-400">Sign in</a>
                <a className="btn  w-16 lg:w-24 bg-blue-400 text-white rounded-md hover:bg-transparent hover:text-blue-700 hover:border-blue-400">Sign Up</a>
            </div>
        </div>
    )
}