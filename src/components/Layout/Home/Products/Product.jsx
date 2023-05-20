import { Link } from "react-router-dom";

const Product = ({ toy }) => {

    const { _id, carName,pictureUrl,price,rating,description } = toy;



    return (
        <div className="card bg-sky-100 ">
            <figure><img src={pictureUrl} style={{width:200}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{carName}</h2>
                <p>{description}</p>
                <p>{rating}</p>
                <div className="card-actions justify-between">
                     <h5>$ {price}</h5>
                    <Link to={`/checkout/${_id}`}><button className="btn bg-pink-400 border-none hover:bg-pink-800">Go</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;