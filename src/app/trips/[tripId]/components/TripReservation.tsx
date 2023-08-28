"use client"

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
    trip: Trip
}

const TripReservation = ({ trip }: TripReservationProps) => {
    return (
        <div>
            <div className="flex flex-col px-5 ">
                <div className="flex gap-3">
                    <DatePicker placeholderText="Data de Início" onChange={() => { }} className="w-full" />
                    <DatePicker placeholderText="Data final" onChange={() => { }} className="w-full" />
                </div>
                <Input placeholder={`Número de hóspedes max(${trip.maxGuests})`} className="mt-4" />
                <div className="flex justify-between mt-3">
                    <p className="font-medium texte-sm text-primaryDarker">Total:</p>
                    <p className="font-medium texte-sm text-primaryDarker">R$2500</p>

                </div>
                <div className="pb-10 border-b border-grayLighter w-full    ">
                    <Button className="w-full mt-2">Reservar Agora</Button>

                </div>
            </div>
        </div>
    )
}
export default TripReservation;