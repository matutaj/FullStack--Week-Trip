
import { prisma } from "@/lib/prisma";

import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescrition from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({ where: { id: tripId } })

    return trip;
}

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    const trip = await getTripDetails(params.tripId);
    // const trip = await fetch("http://localhost:3000/hello")

    if (!trip) return null;

    return (
        <div className="container mx-auto">
            <TripHeader trip={trip} />
            <TripReservation tripoStartDate={trip.startDate} tripEndDate={trip.endDate} maxGuests={trip.maxGuests} />
            <TripDescrition description={trip.description} />
            <TripHighlights highlights={trip.highlights} />
            <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
        </div>
    )
}
export default TripDetails