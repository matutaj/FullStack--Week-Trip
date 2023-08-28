import React from "react";

interface TripDescritionProps {
    description: string
}

const TripDescrition = ({ description }: TripDescritionProps) => {
    return (
        <div className="flex flex-col p-5">
            <h2 className="font-semibold text-primaryDarcker">Sobre a Viagem</h2>
            <p className="text-xs leading-5 text-primaryDarker mt-1">{description}</p>
        </div>
    )
}
export default TripDescrition