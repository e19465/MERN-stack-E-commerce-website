import Announcements from "../../components/Announcements/Announcements";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";

const Homepage = () => {
  return (
    <div className="homepage">
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Homepage;
