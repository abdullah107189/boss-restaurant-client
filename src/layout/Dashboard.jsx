import { NavLink, Outlet } from "react-router-dom";
import { MdHome, MdCalendarToday, MdWallet, MdShoppingCart, MdStars, MdOutlineLocalOffer } from 'react-icons/md';
import { FaHome, FaBars, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* right side  */}
                <div className="drawer-content min-h-screen">
                    {/* Page content here */}
                    <div className="lg:ml-[350px]">
                        <Outlet></Outlet>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn p-2 absolute bottom-2 right-2 bg-[#D1A054] text-white rounded-full drawer-button lg:hidden">
                        <MdHome className="w-8 h-8" />
                    </label>
                </div>

                {/* left side nanbar  */}
                <div className="drawer-side font-serif ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4 uppercase fixed ">
                        <div className="space-y-4 sticky top-0 z-10 h-screen overflow-auto">
                            <h1 className="text-4xl font-bold"><span className="text-white font-serif">B</span>oos Restaurant</h1>
                            {/* Sidebar content here */}
                            <NavLink to={'/dashboard/user-home'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} mt-10 flex items-center space-x-2`}>
                                <MdHome className="w-6 h-6" />
                                <span>User Home</span>
                            </NavLink>
                            <NavLink to={'/dashboard/reservation'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <MdCalendarToday className="w-6 h-6" />
                                <span>Reservation</span>
                            </NavLink>
                            <NavLink to={'/dashboard/payment-history'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <MdWallet className="w-6 h-6" />
                                <span>Payment History</span>
                            </NavLink>
                            <NavLink to={'/dashboard/my-carts'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <MdShoppingCart className="w-6 h-6" />
                                <span>My cart</span>
                            </NavLink>
                            <NavLink to={'/dashboard/add-review'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <MdStars className="w-6 h-6" />
                                <span>Add Review</span>
                            </NavLink>
                            <NavLink to={'/dashboard/my-booking'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <MdOutlineLocalOffer className="w-6 h-6" />
                                <span>My Booking</span>
                            </NavLink>
                            <div className="divider"></div>
                            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <FaHome className="w-6 h-6" />
                                <span>Home</span>
                            </NavLink>
                            <NavLink to={'/our-menu'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <FaBars className="w-6 h-6" />
                                <span>Menu</span>
                            </NavLink>
                            <NavLink to={'/our-shop/salad'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <FaShoppingCart className="w-6 h-6" />
                                <span>Shop</span>
                            </NavLink>
                            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? 'text-white font-bold' : ''} flex items-center space-x-2`}>
                                <FaEnvelope className="w-6 h-6" />
                                <span>Contact</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;