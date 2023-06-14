import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Product from "../Layout/Home/Products/Product";


const AllToys = () => {
    useTitle('AllToys');
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log(searchText)
    
    useEffect(() => {
        fetch('https://toys-store-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user]);

    // Handle Search
    const handleSearch = () => {
        fetch(`https://toys-store-server.vercel.app/toys/toySearch/${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setToys(data)
          });
      };

    return (
        <div className="overflow-x-auto w-full">
            <div className="lg:flex justify-between items-center px-20">
                <h2 className="text-5xl my-7">All Toys</h2>
                <div className="form-control">
                    <div className="input-group">
                        {/* onChange={(e)=>setSearchText(e.target.value)} */}
                        <input onChange={(e) => setSearchText(e.target.value)}
                            type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 lg:px-20 my-10'>
                            {
                               toys.map(data => <Product key={data._id} data={data}></Product>)
                            }
                        </div>
        </div>
    );
};

export default AllToys;