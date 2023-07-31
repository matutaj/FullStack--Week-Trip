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
    // const data = await fetch("http://jsonplaceholder.typicode.com/posts", {
    //     next: {
    //         //caso queira pegar do catch basta adicionar um valor
    //         //para não pegar as informações do catch mas do banco sempre que for chamado usamos o valor falso ou 0
    //         revalidate: 10
    //     }
    // }).then((res) => res.json());

    return <div>{

    }</div>
}
export default Trips;