import Image from "next/image";
import React from "react";

interface TriphighlightsProps {
    highlights: string[]
}

const Triphighlights = ({ highlights }: TriphighlightsProps) => {
    return (
        <div className="flex flex-col p-5">
            <h2 className="font-semibold mb-2 text-primaryDarcker">Destaques</h2>

            <div className=" flex flex-wrap gap-y-2">
                {
                    highlights.map((highlight, index) => (
                        <div className=" flex items-center gap-2 w-1/2">
                            <Image src="/check-icon.png" width={15} height={15} alt={highlight} />
                            <p className="text-grayPrimary text-xs ">{highlight}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Triphighlights;