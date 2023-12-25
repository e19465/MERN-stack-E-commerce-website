import Announcements from "../../components/Announcements/Announcements";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";

const Homepage = () => {
  return (
    <div className="homepage">
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Homepage;
