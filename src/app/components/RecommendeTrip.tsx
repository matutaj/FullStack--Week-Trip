
import React from "react";

const RecommendedTrip = async () => {
    const data = await fetch("http://localhost:3000/hello").then((res) => res.json());
    return (
        <div className="contariner mx-auto p-5">
            <div className="flex items-center mt-4">
                <div className="w-full h-[1px] bg-grayLighter" ></div>
                <h2 className=" px-5 font-medium text-grayPrimary whitespace-nowrap"> Destinos Rescomendados</h2>
                <div className="w-full h-[1px] bg-grayLighter" ></div>
            </div>

        </div>
    )
}
export default RecommendedTrip;