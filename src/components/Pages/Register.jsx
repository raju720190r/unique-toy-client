
const Register = () => {
    return (
        <div>
            <div className={`py-56 lg:py-10 bg-[url('https://i.ibb.co/gjVTwyC/banner-1.jpg')]  bg-center bg-cover relative `}>
                <h2 className="text-center font bold text-5xl">Please Register</h2>

            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="Password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-2">
                               <input className="btn" type="submit" value="Register Here" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;