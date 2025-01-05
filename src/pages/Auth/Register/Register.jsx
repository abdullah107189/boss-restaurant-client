import bgImg from '../../../assets/menu/menu-bg.png'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import regPhoto from '../../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SocialBtn from '../../../components/socialBtn/socialBtn';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // react form hook 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data?.email, data?.password)
            .then(res => {
                if (res.user) {
                    updateUserProfile(data?.name, data?.photoURL)
                        .then(() => {
                            // send user info in db
                            const userdata = {
                                name: data?.name,
                                email: data?.email,
                                creationTime: new Date()
                            }
                            axiosPublic.post('/users', userdata)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.insertedId) {
                                        toast.success('Well Come to our restaurant')
                                    }
                                })
                                .catch(err => {
                                    console.log(err);
                                })
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
    }
    return (
        <div className='min-h-screen lg:px-20 md:px-10 px-5  flex items-center justify-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full border shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="bg-transparent p-5 md:p-10 ">
                    <h1 className="text-3xl font-bold mb-2 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>                        <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            id="name"
                            className="w-full  rounded-md py-2 px-3 focus:outline-none"
                        />
                        {errors.name && <p className='text-red-500 mt-1'>Name field is required</p>}
                    </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                            {errors.email && <p className='text-red-500 mt-1'>Email field is required</p>}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="photoURL" className="block text-gray-700">photoURL</label>
                            <input
                                type="url"
                                id="photoURL"
                                {...register("photoURL", { required: true })}
                                className="w-full  rounded-md py-2 px-3 focus:outline-none"
                            />
                            {errors.photoURL && <p className='text-red-500 mt-1'>PhotoUrl field is required</p>}
                        </div>

                        <div className="mb-2 relative">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"

                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[a-z])/,
                                        message: "Password must have at least one uppercase letter, one lowercase letter"
                                    }
                                })}

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
                            {errors.password?.type === "pattern" && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
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
                        <SocialBtn></SocialBtn>
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