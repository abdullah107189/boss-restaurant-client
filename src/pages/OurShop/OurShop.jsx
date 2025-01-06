import MainCover from "../../components/MainCover/MainCover";
import shopBg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ourShop.css'
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
// slider 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OurShop = () => {
    const navigate = useNavigate()
    const { menu } = useMenu()
    const { category } = useParams()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const dessert = menu.filter(d => d.category === "dessert")

    const pizza = menu.filter(d => d.category === "pizza")
    const salad = menu.filter(d => d.category === "salad")
    const soup = menu.filter(d => d.category === "soup")
    const drinks = menu.filter(d => d.category === "drinks")

    // slider 
    const createGroup = (array) => {
        const groupedItems = [];

        for (let i = 0; i < array.length; i += 6) {
            groupedItems.push(array.slice(i, i + 6))
        }
        return groupedItems;
    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const saladModified = createGroup(salad)
    const pizzaModified = createGroup(pizza)
    const soupModified = createGroup(soup)
    const dessertModified = createGroup(dessert)
    const drinkstModified = createGroup(drinks)


    return (
        <div>
            <MainCover img={shopBg} title={'Our Shop'} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={' my-10'}>
                <TabList className={'flex justify-center my-10 py-2 '}>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="md:mx-3 mx-1 cursor-pointer md:px-3 px-1" onClick={() => navigate('/our-shop/salad')}>SALADS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="md:mx-3 mx-1 cursor-pointer md:px-3 px-1" onClick={() => navigate('/our-shop/pizza')}>PIZZAS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="md:mx-3 mx-1 cursor-pointer md:px-3 px-1" onClick={() => navigate('/our-shop/soup')}>SOUPS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="md:mx-3 mx-1 cursor-pointer md:px-3 px-1" onClick={() => navigate('/our-shop/dessert')}>DESSERTS</Tab>
                    <Tab selectedClassName="border-b-4 rounded-lg  border-0 outline-none border-[#BB8506] text-[#BB8506]"
                        className="md:mx-3 mx-1 cursor-pointer md:px-3 px-1" onClick={() => navigate('/our-shop/drinks')}>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {saladModified.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                                    {group.map((item) => (
                                        <FoodCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {pizzaModified.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                                    {group.map((item) => (
                                        <FoodCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {soupModified.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                                    {group.map((item) => (
                                        <FoodCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {dessertModified.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                                    {group.map((item) => (
                                        <FoodCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {drinkstModified.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                                    {group.map((item) => (
                                        <FoodCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default OurShop;