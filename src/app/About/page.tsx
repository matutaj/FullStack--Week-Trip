import React from "react";
import Trips from "./components/trips";
export const metadata = {
    title: "About",
}

const Page = () => {
    return (
        <>
            <div className="bg-primary">Matuta Jorge Jr.</div>
            <Trips />

        </>

    )
}

export default Page; 