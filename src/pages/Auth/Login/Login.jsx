import bgImg from '../../../assets/menu/menu-bg.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import regPhoto from '../../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import toast from 'react-hot-toast';
import './login.css'
import { useForm, } from "react-hook-form"
import { AuthContext } from '../../../provider/AuthProvider';
import SocialBtn from '../../../components/socialBtn/socialBtn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const { loginInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.location.pathname || '/'
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // recaptcha
    const recaptchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // recaptcha 
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

    // react form hook 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // login and submit 
    const onSubmit = (data) => {
        console.log(data)
        loginInUser(data?.email, data?.password)
            .then(() => {
                navigate(from)
                toast.success('Well Come to our restaurant')
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='min-h-screen lg:px-20 md:px-10 px-5  flex items-center justify-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full border shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="hidden md:block">
                    <img src={regPhoto} alt="Restaurant image" className="h-full w-full object-contain rounded-lg" />
                </div>
                <div className="bg-transparent p-5 md:p-10 ">
                    <h1 className="text-3xl font-bold mb-2 text-center">Sign In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                value={email}
                                placeholder='email type here'
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                            {errors.email && <p className='text-red-500 mt-1'>Email field is required</p>}
                        </div>

                        <div className="mb-2 relative">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /[A-Za-z]/
                                })}
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
                            {errors.password?.type === 'required' && <p className='text-red-500 mt-1'>Password field is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500 mt-1'>Password must be 6 cherecter</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-500 mt-1'>Password must have One Uppercase One Lowercase</p>}
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
                        <SocialBtn></SocialBtn>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;