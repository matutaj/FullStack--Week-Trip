"use client"

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { differenceInDays } from "date-fns"

interface TripReservationProps {
    tripId: string
    tripStartDate: Date
    tripEndDate: Date
    pricePerDay: number
    maxGuests: number
}

interface TripReservationForm {
    guests: number
    startDate: Date | null
    endDate: Date | null
}

const TripReservation = ({ maxGuests, tripStartDate, tripEndDate, pricePerDay, tripId }: TripReservationProps) => {
    const { register, handleSubmit, formState: { errors }, control, watch, setError } = useForm<TripReservationForm>();

    const onSubmit = async (data: any) => {
        const response = await fetch("http://localhost:3000/api/trips/check", {
            method: "POST",
            body: Buffer.from(
                JSON.stringify({
                    startDate: data.starDate,
                    endDate: data.endDate,
                    tripId,
                })
            )
        })
        const res = response.json();

        if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
            setError("startDate", {
                type: "manual",
                message: "Esta data Já está reservada. "
            });
            return setError("endDate", {
                type: "manual",
                message: "Esta data Já está reservada. "
            })
        };
        if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
            setError("startDate", {
                type: "manual",
                message: "Data inválida. "
            });
            return setError("endDate", {
                type: "manual",
                message: "Data inválida. "
            });
        };



    }

    const startDate = watch("startDate")
    const endDate = watch("endDate")
    return (
        <div>
            <div className="flex flex-col px-5 ">
                <div className="flex gap-3">
                    <Controller
                        name="startDate"
                        rules={{
                            required: {
                                value: true,
                                message: "Data Inicial é obrigatória",
                            }
                        }
                        }
                        control={control}
                        render={({ field }) => (<DatePicker
                            error={!!errors?.startDate}
                            errorMessage={errors?.startDate?.message}
                            onChange={field.onChange}
                            selected={field.value}
                            placeholderText="Data de Início"
                            className="w-full"
                            minDate={tripStartDate}
                        />
                        )}
                    />
                    <Controller
                        name="endDate"
                        rules={{
                            required: {
                                value: true,
                                message: "Data Final é obrigatória",
                            }
                        }
                        }
                        control={control}
                        render={({ field }) => (<DatePicker
                            error={!!errors?.endDate}
                            errorMessage={errors?.endDate?.message}
                            onChange={field.onChange}
                            selected={field.value}
                            placeholderText="Data Final"
                            className="w-full"
                            minDate={startDate ?? tripStartDate}
                        />

                        )}
                    />
                </div>
                <Input {...register("guests", {
                    required: {
                        value: true,
                        message: "Número de Hóspodes é obrigatório. "
                    }
                })}
                    error={!!errors?.guests}
                    errorMessage={errors?.guests?.message}
                    placeholder={`Número de hóspedes max(${maxGuests})`}
                    className="mt-4"
                    type="number"
                />
                <div className="flex justify-between mt-3">
                    <p className="font-medium texte-sm text-primaryDarker">Total:</p>
                    <p className="font-medium texte-sm text-primaryDarker">{startDate && endDate ?
                        `R$${differenceInDays(endDate, startDate) * pricePerDay}`
                        : "R$0"}</p>
                </div>
                <div className="pb-10 border-b border-grayLighter w-full    ">
                    <Button onClick={() => handleSubmit(onSubmit)()} className="w-full mt-2">Reservar Agora</Button>

                </div>
            </div>
        </div>
    )
}
export default TripReservation;