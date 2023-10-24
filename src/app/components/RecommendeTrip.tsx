
import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";

async function getTrip() {
    const trips = await prisma?.trip.findMany()
    return trips;
}

const RecommendedTrip = async () => {
    const data = await getTrip()
    return (
        <div className="contariner mx-auto p-5">
            <div className="flex items-center mt-4">
                <div className="w-full h-[1px] bg-grayLighter" ></div>
                <h2 className=" px-5 font-medium text-grayPrimary whitespace-nowrap"> Destinos Rescomendados</h2>
                <div className="w-full h-[1px] bg-grayLighter" ></div>
            </div>
            <div className="flex flex-col items-center mt-5 gap-5">
                {
                    data && data.map((trip: Trip) => (
                        <TripItem key={trip.id} trip={trip} />
                    ))
                }
            </div>
        </div>
    )
}
export default RecommendedTrip;