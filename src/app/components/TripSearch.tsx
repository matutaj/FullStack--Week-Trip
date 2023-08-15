import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "react-currency-input-field";

const TripSearch = () => {
    return (
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
            <h1 className="font-semibold text-2xl text-primaryDarker text-center">
                Encontre sua próxima <span className="text-primary">Viagem!</span> </h1>

            <div className="felx flex-col gap-4 mt-5">
                <Input placeholder="Onde Você quer Ir!" />

                <div className="flex gap-4">
                    <DatePicker placeholderText="Data da IDa " onChange={() => { }} />
                    <CurrencyInput placeholder="Orçamento" />

                </div>
                <Button> Buscar</Button>
            </div>
        </div>


    )
}

export default TripSearch