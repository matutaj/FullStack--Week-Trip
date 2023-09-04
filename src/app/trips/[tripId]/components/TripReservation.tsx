"use client"

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
    tripoStartDate: Date
    tripEndDate: Date
    maxGuests: number
}

interface TripReservationForm {
    guests: number
    startDate: Date | null
    endDate: Date | null
}

const TripReservation = ({ maxGuests, tripoStartDate, tripEndDate }: TripReservationProps) => {
    const { register, handleSubmit, formState: { errors }, control, watch } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log({ data })
    }

    const startDate = watch("startDate")
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
                            className="w-full" />
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
                            maxDate={tripEndDate}
                            minDate={startDate ?? tripoStartDate}
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
                    placeholder={`Número de hóspedes max(${maxGuests})`} className="mt-4" />
                <div className="flex justify-between mt-3">
                    <p className="font-medium texte-sm text-primaryDarker">Total:</p>
                    <p className="font-medium texte-sm text-primaryDarker">R$2500</p>

                </div>
                <div className="pb-10 border-b border-grayLighter w-full    ">
                    <Button onClick={() => handleSubmit(onSubmit)()} className="w-full mt-2">Reservar Agora</Button>

                </div>
            </div>
        </div>
    )
}
export default TripReservation;