import { useEffect } from "react";
import { useState } from "react"

const useBrand = () => {
    const [brands, setBrands] = useState([]);
    

    useEffect(() =>{
        fetch("/coupons.json")
        .then((res) => res.json())
        .then ((data) =>{
            setBrands(data)
        })
            .catch((error) => {console.error("error fetching brand data", error);
            });
    }, []);
    
    return {brands};
};

export default useBrand;