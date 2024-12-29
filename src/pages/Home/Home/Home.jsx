import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <HomeSlider></HomeSlider>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;