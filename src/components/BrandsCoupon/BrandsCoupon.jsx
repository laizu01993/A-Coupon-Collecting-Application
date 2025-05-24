import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const BrandsCoupon = () => {

    const brand = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-4">
            <div className="text-center">
                <img className="h-24 mx-auto" src={brand.brand_logo} />
                <h2 className="text-3xl font-bold text-blue-500">{brand.brand_name}</h2>
                <div className="flex justify-center items-center gap-1">
                    <p className="text-lg">Rating: {brand.rating} </p>
                    <FaRegStar />
                </div>

                {/* coupon grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        brand.coupons.map((coupon, idx) => (
                            <div key={idx} className="bg-base-100 border shadow-md rounded-xl p-4">
                                <h3 className="text-xl font-bold mb-2 text-blue-700">{coupon.coupon_type} Coupon</h3>
                                <p className="text-gray-700 mb-1">{coupon.description}</p>
                                <p className="text-sm text-gray-600"><strong>Condition:</strong>{coupon.condition}</p>
                                <p className="text-sm text-gray-600 mb-2"><strong>Expires:</strong>{coupon.expiry_date}</p>
                                <p className="font-semibold text-blue-500 mb-3">Code: {coupon.coupon_code}</p>
                                <CopyToClipboard text={coupon.coupon_code}
                                    onCopy={() => toast.success("Coupon code copied!")}><button className="btn btn-sm btn-outline w-full mb-2">Copy Code</button></CopyToClipboard>
                                <button
                                    onClick={() => window.open(brand.shop_Link, "_blank")}
                                    className="btn btn-sm bg-blue-500 text-white w-full"
                                >
                                    Use Now
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandsCoupon;