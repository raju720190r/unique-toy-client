import useTitle from "../../../Hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Products from "./Products/Products";
import Services from "./Services";
// import Tabs from "./Tabs";


const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           {/* <Tabs></Tabs> */}
           <Products></Products>
           <Services></Services>
           <About></About>
        </div>
    );
};

export default Home;