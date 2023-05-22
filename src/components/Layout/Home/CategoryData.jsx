import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from './Products/Product';
const CategoryData = () => {
    const [luxuryCar, setluxuryCar] = useState([]);
    const [policeCar, setPoliceCar] = useState([]);
    const [constructionCar,setConstructionCar]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const luxuryData = data.filter(d => d.subCategory === "luxury");
                const policeData = data.filter(d => d.subCategory === "police");
                const constructionData = data.filter(d=>d.subCategory==="construction");
                setluxuryCar(luxuryData);
                setPoliceCar(policeData);
                setConstructionCar(constructionData);



            })
    }, [])
    return (
        <div className='text-center my-5'>
            <div>
                <h2 className="text-3xl font-bold mb-5">Shop by Category</h2>
                <p className="my-5">Get 10% off your shop once a month</p>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Luxury</Tab>
                        <Tab>Police</Tab>
                        <Tab>Construction</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-5 lg:px-20'>
                            {
                                luxuryCar.map(data => <Product key={data._id} data={data}></Product>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-5 lg:px-20'>
                            {
                                policeCar.map(data => <Product key={data._id} data={data}></Product>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-5 lg:px-20'>
                            {
                                constructionCar.map(data => <Product key={data._id} data={data}></Product>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CategoryData;