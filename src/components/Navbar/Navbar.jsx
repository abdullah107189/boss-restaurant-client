import { NavLink } from "react-router-dom";
import shoppingCart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
const Navbar = () => {
    const user = false;
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Home</NavLink>
                        <NavLink to={'/contact-us'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Contact Us</NavLink>
                        <NavLink to={'/dashboard'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Dashboard</NavLink>
                        <NavLink to={'/our-menu'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Menu</NavLink>
                        <NavLink to={'/our-shop/salad'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Shop</NavLink>
                    </ul>
                </div>
                <a href="/" className="font-bold text-xl">
                    Boos Restaurant
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton '}`}>Home</NavLink>
                    <NavLink to={'/contact-us'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Contact Us</NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Dashboard</NavLink>
                    <NavLink to={'/our-menu'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Menu</NavLink>
                    <NavLink to={'/our-shop/salad'} className={({ isActive }) => `${isActive ? 'activeButton' : 'borderWithButton'}`}>Our Shop</NavLink>
                </ul>
            </div>
            <div className="navbar-end items-center gap-2">
                <img className="w-16 h-16 object-contain" src={shoppingCart} alt="" />

                {
                    user ?
                        <div>
                            <a className="btn">Sign Out</a>
                            <img src={user?.photoURL} alt={user?.displayName} />
                        </div>
                        :
                        <div className="flex items-center gap-2">
                            <button className="borderWithButton">Sign In</button>
                            <div className="avatar">
                                <div className="mask mask-hexagon w-14">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>

    );
};

export default Navbar;