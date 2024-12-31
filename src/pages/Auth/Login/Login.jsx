import bgImg from '../../../assets/menu/menu-bg.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import regPhoto from '../../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import toast from 'react-hot-toast';
import './login.css'
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const { user } = useContext(AuthContext)
    console.log(user);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password, });
    };

    // recaptcha
    const recaptchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleRecaptch = () => {
        const user_captcha_value = recaptchaRef.current.value
        if (recaptchaRef.current.value !== '') {
            if (validateCaptcha(user_captcha_value) == true) {
                toast.success('Matched recaptcha')
                recaptchaRef.current.value = ''
                setDisabled(false)
            }

            else {
                recaptchaRef.current.value = ''
                alert('Captcha Does Not Match');
                setDisabled(true)
            }
        }
        else {
            setDisabled(true)
            toast.error('please write recaptcha')
        }
    }

    return (
        <div className='min-h-screen lg:px-20 md:px-10 px-5  flex items-center justify-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full border shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="hidden md:block">
                    <img src={regPhoto} alt="Restaurant image" className="h-full w-full object-contain rounded-lg" />
                </div>
                <div className="bg-transparent p-5 md:p-10 ">
                    <h1 className="text-3xl font-bold mb-2 text-center">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder='email type here'
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                        </div>
                        <div className="mb-2 relative">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                placeholder='password type here'
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

                        {/* recaptcha */}
                        <div className="mb-2">
                            <label htmlFor="recaptcha" className="block text-gray-700">recaptcha</label>
                            < LoadCanvasTemplate />
                            <input
                                type="recaptcha"
                                id="recaptcha"
                                ref={recaptchaRef}
                                placeholder='recaptcha type here'
                                className="w-full mt-2 rounded-md py-2 px-3 focus:outline-none"
                            />
                        </div>
                        <p className='btn w-full text-center cursor-pointer mb-3' onClick={handleRecaptch}>Validation</p>

                        <button
                            type="submit"
                            className="bg-[#D1A054] w-full text-white disabled:bg-gray-300 font-bold py-2 px-4 rounded"
                            disabled={disabled}
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-[#D1A054] text-center">Have an account ? <Link to={'/register'} className="text-[#D1A054] font-bold">Go to Sign Up</Link></p>
                        <p className="mt-2">Or Sign In with</p>
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

            </div>

        </div>
    );
};

export default Login;