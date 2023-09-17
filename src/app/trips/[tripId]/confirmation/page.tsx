'use client'

import { Trip } from "@prisma/client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TripConfirmation = ({ params }: { params: { tripId: string, } }) => {

    const [trip, setTrip] = useState<Trip | null>();

    const searchParams = useSearchParams()

    useEffect(() => {
        const fetchTrip = async () => {
            const response = await fetch(`http://localhost:3000/api/trips/check`, {
                method: 'POST',
                body: JSON.stringify({
                    tripId: params.tripId,
                    startDate: searchParams.get("startDate"),
                    endDate: searchParams.get("endDate"),
                })

            })
            const { trip } = await response.json();

            setTrip(trip)

        }

        fetchTrip()
    }, []);


    console.log({ trip })



    return (

        <div className=" container mx-auto p-5">
            {params.tripId}
            <h1 className="font-semibold text-xl text-primaryDarker"> Sua viagem</h1>
            <div className="flex clex-col">
                <div className="relative h-[106px] w-[124px]">
                    <Image src={trip.coverImge} fill style={{ objectFit: "cover" }} alt={trip?.name} />
                </div>
            </div>
        </div>
    )
}
export default TripConfirmation