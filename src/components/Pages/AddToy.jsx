import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
const AddToy = () => {
    const {user} =useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Booking Successfully')
            }
        })
        

    };


    return (
        <div>
            <h2 className="hero bg-base-100 text-5xl text-center my-5 ">Add A Toy</h2>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col ">
                    <div className="card bg-pink-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body grid lg:grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input className="input input-bordered" {...register("carName")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input className="input input-bordered"  {...register("sellerName")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input className="input"  {...register("sellerEmail", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input className="input input-bordered"  {...register("price")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input className="input input-bordered" {...register("rating")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input className="input input-bordered"  {...register("quantity")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input className="input input-bordered"  {...register("pictureUrl")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input className="input input-bordered" {...register("description")} />
                                </div>

                            </div>
                            <div className="form-control mt-0 mb-5">
                                <label className="label">
                                    <span className="label-text text-center">Category</span>
                                </label>
                                <select className="input" {...register("subCategory")}>
                                    <option value="police">Police</option>
                                    <option value="luxury">Luxury</option>
                                    <option value="construction">Construction</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <input className="btn bg-sky-300 border-none" type="submit" value="Add Toy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;