import MainCover from "../../components/MainCover/MainCover";
import shopBg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ourShop.css'
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const OurShop = () => {
    const [menu] = useMenu()
    const { category } = useParams()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const dessert = menu.filter(d => d.category === "dessert")
    const pizza = menu.filter(d => d.category === "pizza")
    const salad = menu.filter(d => d.category === "salad")
    const soup = menu.filter(d => d.category === "soup")
    const drinks = menu.filter(d => d.category === "drinks")
    const navigate = useNavigate()

    return (
        <div>
            <MainCover img={shopBg} title={'Our Shop'} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={' my-10'}>
                <TabList className={'flex justify-center my-10'}>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="mx-3 cursor-pointer px-3" onClick={() => navigate('/our-shop/salad')}>SALADS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="mx-3 cursor-pointer px-3" onClick={() => navigate('/our-shop/pizza')}>PIZZAS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="mx-3 cursor-pointer px-3" onClick={() => navigate('/our-shop/soup')}>SOUPS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="mx-3 cursor-pointer px-3" onClick={() => navigate('/our-shop/dessert')}>DESSERTS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="mx-3 cursor-pointer px-3" onClick={() => navigate('/our-shop/drinks')}>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                        {
                            salad.map(s => <FoodCard key={s._id} item={s}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                        {
                            pizza.map(s => <FoodCard key={s._id} item={s}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                        {
                            soup.map(s => <FoodCard key={s._id} item={s}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                        {
                            dessert.map(s => <FoodCard key={s._id} item={s}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                        {
                            drinks.map(s => <FoodCard key={s._id} item={s}></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;