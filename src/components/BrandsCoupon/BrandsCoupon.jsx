import { useLoaderData } from "react-router-dom";

const BrandsCoupon = () =>{

    const brand = useLoaderData();

    return (
        <div>
            <div className="text-center">
                <img src={brand.brand_logo}/>
                <h2>{brand.brand_name}</h2>
                <p>Rating: {brand.rating}</p>
            </div>
        </div>
    );
};

export default BrandsCoupon;