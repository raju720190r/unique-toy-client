import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure');
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`,{
                method: 'DELETE'
                
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount>0){
                        alert('deleted Successful')
                        const remaining = jobs.filter(job =>job._id !==id)
                        setJobs(remaining)
                    }
                })
        }
    }



    return (
        <div>
            <h2 className="text-5xl">My Toy Section</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Car Name</th>
                            <th>Seller Name & Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={job.pictureUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.carName}</div>
                                            <div className="text-sm opacity-50">{job.subCategory}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.sellerName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.sellerEmail}</span>
                                </td>
                                <td>$ {job.price}</td>
                                <td> {job.quantity}</td>
                                <th>
                                    <button className="btn bg-pink-300 border-none">Edit</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(job._id)} className="btn bg-sky-300 border-none">delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;