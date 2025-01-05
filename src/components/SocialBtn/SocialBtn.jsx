import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialBtn = () => {
    const { createUserWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.location.pathname || '/'
    const handleGoogle = () => {
        createUserWithGoogle()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    const userData = {
                        name: res.user?.displayName,
                        email: res.user?.email,
                        creationTime: new Date(),
                    }
                    axiosPublic.post('/users', userData)
                        .then(() => {
                            toast.success('Well Come to our restaurant')
                            navigate(from)
                        })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button onClick={handleGoogle} className="bg-red-500 hover:bg-red-700 text-white rounded-full p-2 mt-2 w-1/2 mx-auto">
            <FaGoogle className='mx-auto' />
        </button>
    );
};

export default SocialBtn;