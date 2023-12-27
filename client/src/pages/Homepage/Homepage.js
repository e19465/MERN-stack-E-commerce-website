import Announcements from "../../components/Announcements/Announcements";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/FeturedProducts/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Featured from "../../components/Featured/Featured";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Announcements />
      <Slider />
      <Featured />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
