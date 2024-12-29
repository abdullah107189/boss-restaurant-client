import { useEffect, useState } from "react";
import SectionMenu from "../../../components/SectionMenu/SectionMenu";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const filterPopularMenu = data.filter(d => d.category === "popular")
                setPopularMenu(filterPopularMenu)
            })
    }, [])
    return (
        <div className="px-2 md:px-0">
            <SectionHeader subTitle={'Check in out'} title={"From our menu"}></SectionHeader>
            <SectionMenu items={popularMenu}></SectionMenu>
        </div>
    );
};

export default PopularMenu;