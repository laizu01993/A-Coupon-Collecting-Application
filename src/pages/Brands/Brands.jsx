import { useState } from "react";
import useBrand from "../../hooks/useBrand";
import BrandCard from "../../components/BrandCard/BrandCard";

const Brands = () => {

    const {brands} = useBrand();
    const [search, setSearch] = useState("");
    const filtered = brands.filter((brand) => brand.brand_name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="mx-auto w-11/12">
            <h1 className="justify-center flex text-4xl font-bold my-4">All Brands</h1>
            <input className="input input-bordered w-full rounded-4xl" type="text"
            placeholder="Search brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
             <div className="space-y-6">
                {filtered.map((brand) =>(<BrandCard key={brand._id}
                brand={brand}></BrandCard>))}
             </div>
        </div>
    );
};

export default Brands;