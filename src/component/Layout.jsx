import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.jpg"


import { FaSearch } from "react-icons/fa";
function Layout() {
    return (
        <div>
            <div className="header">


                <nav className="flex text-medium justify-between max-w-screen-2xl mx-auto border-b-2 border-solid border-gray-300 items-center">
                    <div className="font-bold text-4xl">
                        <NavLink activeClassName="active" to="/">
                            <img className="w-40 transition-all duration-300 hover:scale-95 msm:w-20 rounded-full" src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <ul className="flex items-center  ">
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150 hover:bg-gray-900 hover:text-white" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-gray-900 hover:text-white" to="/learn">Learn</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-gray-900 hover:text-white" to="/about-us">About Us</NavLink>
                    </ul>
                    <div className="flex gap-4 items-center justify-center msm:hidden ">
                        <div className="text-2xl mx-auto transition-all duration-300 hover:scale-105    ">

                            <  FaSearch />


                        </div>
                        <div>
                            <input type="text" id="first_name" className="border min-w-48 border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 hover:scale-105" placeholder="Search Here.." required />

                        </div>

                    </div>


                </nav>
            </div>
            <div className="outlet min-h-screen py-3">
                <Outlet />
            </div>
            <div className="footer py-20 bg-gray-900 text-white text-center">
                developed by csabdulgaffar@gmail.com

            </div>
        </div>
    )
}

export default Layout