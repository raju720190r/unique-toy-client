
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys,setToys]= useState([]);
    useEffect(()=>{
          fetch('http://localhost:5000/toys')
          .then(res=>res.json())
          .then(data=>setToys(data))
          
    },[])
 const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='lg:px-20 lg:my-8 gap-5'>
            <Carousel responsive={responsive}>
               {
                toys.map(toy=> <div key={toy.carName} className="card w-52 bg-base-100 border rounded-none bg-sky-100 ">
                <figure><img src={toy.pictureUrl} style={{width:100}} alt="car" /></figure>
                <div className="card-body">
                    <p><small>Rating : {toy.rating}</small></p>
                    <p><small>{toy.price}</small></p>
                </div>
            </div>)
               }
               
                
            </Carousel>
        </div>
    );
};

export default Gallery;