import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user])
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
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job=><tr key={job._id}>
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
              <br/>
              <span className="badge badge-ghost badge-sm">{job.sellerEmail}</span>
            </td>
            <td>$ {job.price}</td>
            <td> {job.quantity}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
      }
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default MyToy;