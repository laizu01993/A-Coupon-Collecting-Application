import useBrand from "../../hooks/useBrand";

const BrandsOnSale = () =>{
    const {brands} = useBrand();

    const saleBrands = brands.filter((brand) => brand.isSaleOn === true);
    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold flex justify-center text-blue-400">Brands On Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {saleBrands.map((brand) => (
                    <div className="card bg-blue-100 shadow-md p-4 flex flex-col items-center ">
                        <img src={brand.brand_logo} className="h-32 w-20 object-contain" />
                        <h3 className="text-4xl font-bold">Brand Name:{brand.brand_name}</h3>
                        <p className="text-2xl font-semibold">Total Coupons: {brand.coupons.length}</p>
                        <p className="text-base font-medium">Category: {brand.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsOnSale;