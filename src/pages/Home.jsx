import Banner from "../components/pages/Home/Banner";
import About from "../components/pages/Home/About";
import Service from "../components/pages/Home/Service";
import Companies from "../components/pages/Home/Companies";
import Trust from "../components/pages/Home/Trust";
import Pricing from "../components/pages/Home/Pricing";
import Customer from "../components/pages/Home/Customer";
import VideoTour from "../components/pages/Home/VideoTour";
import Join from '../components/pages/Home/Join'
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Companies />
      <Trust />
      <Pricing />
      <Customer/>
      <VideoTour/>
      <Join/>
    </>
  );
};

export default Home;
