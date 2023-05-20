// import { useEffect, useState } from "react";
// import Product from "./Product";

const Products = () => {
//    const [toys,setToys]=useState([]);
//    useEffect(()=>{
//     fetch('http://localhost:5000/toys')
//           .then(res=>res.json())
//           .then(data=>setToys(data))
//    },[])
    return (
        <div>
            <div className="text-center mb-5">
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className=" mb-3">Get 10% off your shop once a month</p>
            <div className="">
              <h2 className="btn bg-pink-400 border-none hover:bg-pink-700">All Items</h2>
            </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-7 lg:px-20">
               {/* {
                toys.map(toy=><Product key={toy._id} toy={toy}></Product>)
               } */}
            </div>
            
        </div>
    );
};

export default Products;