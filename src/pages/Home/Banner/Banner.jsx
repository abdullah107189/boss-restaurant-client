import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'
import './banner.css'
const Banner = () => {
    return (
        <Carousel className=" mb-10">
            <div className="sliderHight">
                <img className="" src={img4} />
            </div>
            <div className="sliderHight">
                <img className="" src={img2} />
            </div>
            <div className="sliderHight">
                <img className="" src={img3} />
            </div>
            <div className="sliderHight">
                <img className="" src={img1} />
            </div>
            <div className="sliderHight">
                <img className="" src={img5} />
            </div>
            <div className="sliderHight">
                <img className="" src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;