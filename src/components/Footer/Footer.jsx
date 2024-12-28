import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" text-gray-300  mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="bg-[#1F2937] h-full w-full md:p-20 p-10 ">
                        <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                        <p className="text-sm">+88 123456789</p>
                        <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                    <div className="bg-[#111827] h-full w-full md:p-20 p-10">
                        <h3 className="text-lg font-bold text-white mb-2">Follow Us</h3>
                        <p className="text-sm">Join us on social media</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaFacebook className="w-8 h-8"></FaFacebook>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaInstagram className="w-8 h-8"></FaInstagram>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaTwitter className="w-8 h-8"></FaTwitter>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-[#1E1F20] p-4">
                    <p className="text-xs">Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;