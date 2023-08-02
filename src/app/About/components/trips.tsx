import { prisma } from "@/lib/prisma";
import React from "react";

//server components
const getTrips = async () => {
    const trips = await prisma.trip.findMany();

    return trips;
}

const Trips = async () => {
    //Buscando dados do banco, sem conexão com api
    //const data = await getTrips();

    //usando o fetch do next
    //  
    return <div>{

    }</div>
}
export default Trips;