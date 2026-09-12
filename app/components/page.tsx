import Navbar from "./Navbar";
import Hero from "./Hero";
import Signature from "./Signature";
import Standard from "./Standard";
import Light from "./Light";
import About from "./About";
import Flavors from "./Flavors";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Home = () => {
    return (  
        <div className="overflow-hidden min-h-screen bg-none">
            <Navbar />
            <Hero />
            <Signature />
            <Standard />
            <Light />
            <About />
            <Flavors />
            <Footer />
            <BackToTop />
        </div>
    );
}
 
export default Home;