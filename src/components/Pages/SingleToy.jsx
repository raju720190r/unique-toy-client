import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewDetails from "./ViewDetails";
import React from "react";


const SingleToy = ({ toy }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { _id, carName, pictureUrl, price, sellerName, subCategory, sellerEmail } = toy;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{carName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
            </td>
            <td>{price}</td>
            <th>
                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                        Edit
                    </Button>

                    <ViewDetails
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    /> */}
                    <Link to={`/edit/${_id}`}><button className="btn btn-ghost bg-pink-100">edit</button></Link>
            </th>
            <th>
                <Link to={`/viewDetails/${_id}`}><button className="btn btn-ghost bg-pink-100">details</button></Link>
            </th>
        </tr>

    );
};

export default SingleToy;