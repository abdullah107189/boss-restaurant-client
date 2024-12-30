import { Helmet } from "react-helmet-async";
import menubg from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import bgImage from '../../assets/home/chef-service.jpg'
import MainCover from "../../components/MainCover/MainCover";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionMenu from "../../components/SectionMenu/SectionMenu";
import ParallaxCover from "../../components/ParallaxCover/ParallaxCover";
import useMenu from "../../hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(d => d.category === "offered")
    const dessert = menu.filter(d => d.category === "dessert")
    const pizza = menu.filter(d => d.category === "pizza")
    const salad = menu.filter(d => d.category === "salad")
    const soup = menu.filter(d => d.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Menu || Boss Restaurant</title>
            </Helmet>

            <MainCover img={menubg} title={"Our menu"} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
            <SectionHeader subTitle={"Don't miss"} title={"today Offer"}></SectionHeader>
            <SectionMenu items={offered} category="offered"></SectionMenu>

            {/* desserts  */}
            <ParallaxCover img={bgImage} subTitle={"Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} title={"DESSERTS"}></ParallaxCover>
            <SectionMenu items={dessert} category={"dessert"}></SectionMenu>

            {/* pizza */}
            <ParallaxCover img={pizzaImg} title={"PIZZA"} subTitle={"Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></ParallaxCover>
            <SectionMenu items={pizza} category={"pizza"}></SectionMenu>

            {/* salad */}
            <ParallaxCover img={saladImg} title={"salad"} subTitle={"Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></ParallaxCover>
            <SectionMenu items={salad} category={"salad"}></SectionMenu>

            {/* soup */}
            <ParallaxCover img={soupImg} title={"soup"} subTitle={"Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></ParallaxCover>
            <SectionMenu items={soup} category={"soup"}></SectionMenu>


        </div>
    );
};

export default Menu;