import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Services></Services>
           <About></About>
        </div>
    );
};

export default Home;