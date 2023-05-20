
const AddToy = () => {
    return (
        <div>
            <h2 className="text-5xl text-center my-5">Add A Toy</h2>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col ">
                    <div className="card bg-pink-100">
                        <form>
                            <div className="card-body grid lg:grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" placeholder="Seller Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" placeholder="Example > 4.5" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <select className="input">
                                        <option value="police">Police</option>
                                        <option value="luxury">Luxury</option>
                                        <option value="construction">Construction</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-pink-300 border-none hover:bg-pink-700 mb-3 mx-3">Add a Toy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;