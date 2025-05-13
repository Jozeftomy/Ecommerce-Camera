import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import Category from "./components/Category";
import TopCamerasSection from "./components/TopCamerasSection";
import SecondaryBanner from "./components/SecondaryBanner";
import ExploreProductsSection from "./components/ExploreProductsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full my-[40px]">
        <Banner />
      </div>
      <div className="w-full my-[40px]">
        <Category />
      </div>
      <div className="w-full my-[40px]">
        <TopCamerasSection />
      </div>
      <div className="w-full my-[40px]">
        <SecondaryBanner />
      </div>
      <div className="w-full my-[20px]">
        <ExploreProductsSection />
      </div>
      <Footer />
    </div>
  );
}
