import { Link } from "react-router-dom";

const Product = ({ data }) => {

    const { _id, carName, pictureUrl, price, rating, description } = data;



    return (
        <div className="card text-left rounded-none bg-sky-100 hover:bg-pink-100 hover:transition" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">
            <figure><img src={pictureUrl} style={{ width: 100 }} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{carName}</h2>
                <p>{description}</p>
                <p>{rating}</p>
                <div className="card-actions justify-between items-center">
                    <h5>$ {price}</h5>
                    <Link to={`/ViewDetails/${_id}`}><button className="btn rounded-full bg-pink-400 border-none hover:bg-pink-800">G</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;