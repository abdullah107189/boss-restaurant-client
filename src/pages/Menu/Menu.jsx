import { Helmet } from "react-helmet-async";
import menubg from '../../assets/menu/banner3.jpg'
import bgImage from '../../assets/home/chef-service.jpg'
import MainCover from "../../components/MainCover/MainCover";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionMenu from "../../components/SectionMenu/SectionMenu";
import { useEffect, useState } from "react";
import ParallaxCover from "../../components/ParallaxCover/ParallaxCover";
const Menu = () => {
    const [offered, setOfferd] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const offeredMenu = data.filter(d => d.category === "offered")
                setOfferd(offeredMenu)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Menu || Boss Restaurant</title>
            </Helmet>
            <MainCover img={menubg} title={"Our menu"} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
            <SectionHeader subTitle={"Don't miss"} title={"today Offer"}></SectionHeader>
            <SectionMenu items={offered}></SectionMenu>
            <ParallaxCover img={bgImage} subTitle={"Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} title={"DESSERTS"}></ParallaxCover>

        </div>
    );
};

export default Menu;