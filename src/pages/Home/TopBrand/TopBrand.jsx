import Marquee from "react-fast-marquee";
import useBrand from "../../../hooks/useBrand";
import { Link } from "react-router-dom";

const TopBrand = () => {

    const {brands} = useBrand();

    return (
        <div>
            <h2 className="text-blue-300 justify-center flex font-bold text-5xl my-6">Top brands</h2>
            <Marquee pauseOnHover={true} speed={60}>
                {
                    brands.map((brand) =>(
                        
                        <div key={brand._id} className="mx-8">
                            <Link to="/brands">
                        <img key={brand._id}
                        src={brand.brand_logo}
                        className="h-32 w-auto object-contain"></img>
                        </Link>
                        </div>
                        
                    ))
                }
            </Marquee>
        </div>
    );
};

export default TopBrand;