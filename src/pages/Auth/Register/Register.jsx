import bgImg from '../../../assets/menu/menu-bg.png'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import regPhoto from '../../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setphotoURL] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length <= 5) {
            return toast.error('set minimum 6 letter')
        }
        // console.log({email, password, name, photoURL});
        createUser(email, password)
            .then(res => {
                if (res.user) {
                    updateUserProfile(name, photoURL)
                        .then(() => {
                            toast.success('Well Come to our restaurant')
                            navigate('/')
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='min-h-screen lg:px-20 md:px-10 px-5  flex items-center justify-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full border shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="bg-transparent p-5 md:p-10 ">
                    <h1 className="text-3xl font-bold mb-2 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="photoURL" className="block text-gray-700">photoURL</label>
                            <input
                                type="photoURL"
                                required
                                id="photoURL"
                                value={photoURL}
                                onChange={(e) => setphotoURL(e.target.value)}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                        </div>
                        <div className="mb-2 relative">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={toggleShowPassword}
                                className="absolute right-3 top-9 hover:text-[#D1A054] focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash className='w-5 h-5' /> : <FaEye className='w-5 h-5' />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#D1A054] w-full text-white font-bold py-2 px-4 rounded"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-[#D1A054] text-center">Already registered? <Link to={'/login'} className="text-[#D1A054] font-bold">Go to log in</Link></p>
                        <p className="mt-2">Or sign up with</p>
                        <div className="flex space-x-4 mt-2 justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2">
                                <FaFacebook />
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white rounded-full p-2">
                                <FaGoogle />
                            </button>
                            <button className="bg-blue-400 hover:bg-blue-600 text-white rounded-full p-2">
                                <FaTwitter />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">

                    <img src={regPhoto} alt="Restaurant image" className="h-full w-full object-contain rounded-lg" />
                </div>
            </div>

        </div>
    );
};

export default Register;