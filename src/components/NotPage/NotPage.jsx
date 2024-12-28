import { Link } from 'react-router-dom';
import page404 from '../../assets/404.gif'
const NotPage = () => {
    return (
        <div className='w-full h-screen border relative'>
            <Link to={'/'} ><button className='borderWithButton'>Go to Home</button></Link>
            <img className='' src={page404} alt="" />
        </div>
    );
};

export default NotPage;