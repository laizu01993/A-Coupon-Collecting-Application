import BrandsOnSale from "../../components/BrandsOnSale/BrandsOnSale";
import HowToUseCoupons from "../../components/HowToUseCoupons/HowToUseCoupons";
import Banner from "./Banner/Banner";
import TopBrand from "./TopBrand/TopBrand";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto my-4">
           <Banner></Banner>
           <TopBrand></TopBrand>
           <BrandsOnSale></BrandsOnSale>
           <HowToUseCoupons></HowToUseCoupons>
        </div>
    );
};

export default Home;