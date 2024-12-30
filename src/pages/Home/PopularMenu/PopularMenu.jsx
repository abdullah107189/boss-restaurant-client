import SectionMenu from "../../../components/SectionMenu/SectionMenu";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(d => d.category === "popular")

    return (
        <div className="px-2 md:px-0">
            <SectionHeader subTitle={'Check in out'} title={"From our menu"}></SectionHeader>
            <SectionMenu items={popularMenu}></SectionMenu>
        </div>
    );
};

export default PopularMenu;