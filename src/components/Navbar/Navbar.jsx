import { Link, NavLink } from "react-router-dom";
import shoppingCart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import useCarts from "../../hooks/useCarts";
const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success('log out success')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const { carts } = useCarts()
    return (
        <div className="text-white uppercase navbar max-w-screen-xl fixed z-10 bg-gray-800/50 py-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Home</NavLink>
                        <NavLink to={'/contact-us'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Contact Us</NavLink>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Dashboard</NavLink>
                        <NavLink to={'/our-menu'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Menu</NavLink>
                        <NavLink to={'/our-shop/salad'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Shop</NavLink>
                    </ul>
                </div>
                <a href="/" className="font-bold md:text-xl">
                    <span className="text-[#bb8506]">B</span>oos Restaurant
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton '}`}>Home</NavLink>
                    <NavLink to={'/contact-us'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Contact Us</NavLink>
                    <NavLink to={'/dashboard/user-home'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Dashboard</NavLink>
                    <NavLink to={'/our-menu'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Menu</NavLink>
                    <NavLink to={'/our-shop/salad'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Shop</NavLink>
                </ul>
            </div>
            <div className="navbar-end items-center gap-2">

                <Link to={'/dashboard/my-carts'} className="relative">
                    <img className="md:w-16  md:h-16 w-14 h-14 object-contain" src={shoppingCart} alt="" />
                    <p className="absolute bg-[#ff0000] h-6 w-6 rounded-full md:left-9 left-8 md:top-8 top-7 flex items-center justify-center pb-1">{carts.length || 0}</p>
                </Link>
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="mask mask-hexagon md:w-14 w-12">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="borderWithButton md:px-3 px-1">Sign Out</button>
                        </div>
                        :
                        <div className="flex items-center gap-2">
                            <Link to={'/login'} className="borderWithButton md:px-3 px-1 ">Sign In</Link>
                        </div>
                }
            </div>
        </div>

    );
};

export default Navbar;