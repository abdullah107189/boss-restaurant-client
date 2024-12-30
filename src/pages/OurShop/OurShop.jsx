import MainCover from "../../components/MainCover/MainCover";
import shopBg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ourShop.css'
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
const OurShop = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(d => d.category === "dessert")
    const pizza = menu.filter(d => d.category === "pizza")
    const salad = menu.filter(d => d.category === "salad")
    const soup = menu.filter(d => d.category === "soup")
    const drinks = menu.filter(d => d.category === "drinks")
    return (
        <div>
            <MainCover img={shopBg} title={'Our Shop'} subTitle={"WOULD YOU LIKE TO TRY A DISH?"}></MainCover>
            <Tabs className={' my-10'}>
                <TabList>
                    <Tab>SALADS</Tab>
                    <Tab>PIZZAS</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
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