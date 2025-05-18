import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const BrandCard = ({brand}) =>{

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleViewCoupons = () =>{
        if(user) {
            navigate(`/brand/${brand._id}`);
        } else {
            navigate("/login");
        }
    };

    return(
        <div className="border rounded-4xl p-6 shadow-md flex-col gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            {/* Top row: Logo + Name + Rating */}
            <div className="flex items-center gap-4">
                <img src={brand.brand_logo} className="h-16 w-16 object-contain" />
                <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl">Brand Name:{brand.brand_name}</h2>
                    <div className="flex items-center font-medium gap-2">Rating:<FaStar></FaStar>
                    <span>{brand.rating}</span>
                    </div>
                </div>
            </div>
            {/* Middle description */}
            <p className="text-gray-700 font-medium">Description:{brand.description}</p>

            {/* Bottom: button + sale text */}
            <div className="flex justify-between items-center">
                <button onClick={handleViewCoupons} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-4xl">View Coupons</button>
                {brand.isSaleOn && (
                    <span className="text-red-500 font-bold animate-bounce">Sale is On!</span>
                )}
            </div>
        </div>
    );
};

export default BrandCard;