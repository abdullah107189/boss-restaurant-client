import { Helmet } from "react-helmet-async";
import menubg from '../../assets/menu/banner3.jpg'
import MainCover from "../../components/MainCover/MainCover";
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu || Boss Restaurant</title>
            </Helmet>
            <MainCover img={menubg} title={"Our menu"} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
        </div>
    );
};

export default Menu;