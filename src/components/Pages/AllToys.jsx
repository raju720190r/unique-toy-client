import { useContext, useEffect, useState } from "react";
import SingleToy from "./SingleToy";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";


const AllToys = () => {
    useTitle('AllToys');
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user]);


    
    return (
        <div className="overflow-x-auto w-full">
            <div className="lg:flex justify-between items-center px-20">
                <h2 className="text-5xl my-7">All Toys</h2>
                <div className="form-control">
                    <div className="input-group">
                    {/* onChange={(e)=>setSearchText(e.target.value)} */}
                        <input  type="text" placeholder="Search…" className="input input-bordered" />
                        <button  className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Seller Name & Email</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys?.slice(0,20).map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                    }
                </tbody>
                {/* foot */}
                

            </table>
        </div>
    );
};

export default AllToys;