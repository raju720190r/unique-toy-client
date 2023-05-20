import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Products from "./Products/Products";
import Services from "./Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Products></Products>
           <Services></Services>
           <About></About>
        </div>
    );
};

export default Home;