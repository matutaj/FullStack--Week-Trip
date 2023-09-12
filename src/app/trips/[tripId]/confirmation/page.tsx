'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TripConfirmation = ({ params }: { params: { tripId: string, startDate: string, endDate: string } }) => {

    const [trip, setTrip] = useState();

    const searchParams = useSearchParams()

    useEffect(() => {
        const fetchTrip = async () => {
            const response = await fetch(`http://localhost:3000/api/trips/check`, {
                body: Buffer.from(
                    JSON.stringify({
                        startDate: searchParams.get("startDate"),
                        endDate: searchParams.get("endDate"),
                        tripId: params.tripId
                    })
                )
            })
            const trip = await response.json()
            setTrip(trip)
        }
        fetchTrip()
    }, [])


    return (
        <div className=" container mx-auto p-5">
            <h1 className="font-semibold text-xl text-primaryDarker"> Sua viagem</h1>
            <div className="flex clex-col">
                <div className="relative h-[106px] w-[124px]">
                    <Image src={trip.coverImagem} fill style={{ objectFit: "cover" }} alt={trip.name} />
                </div>
            </div>
        </div>
    )
}
export default TripConfirmation