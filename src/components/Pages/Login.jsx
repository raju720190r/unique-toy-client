import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className={`py-56 lg:py-10 bg-[url('https://i.ibb.co/gjVTwyC/banner-1.jpg')]  bg-center bg-cover relative `}>
            <h2 className="text-center font bold text-5xl">Please Login</h2>
            </div>
            <div className="hero  bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-pink-300 border-none">Login</button>
                        </div>
                        <div className="form-control">
                         <button className="btn">Sign In With Google</button>
                        </div>
                        <div className="form-control">
                         <p><small>New User? <Link className="btn btn-link">Register Here</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;