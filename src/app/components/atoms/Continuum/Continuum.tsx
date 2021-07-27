import React, { ReactElement } from "react"

type ContinuumProps = {
    title: string
    upperLimit: number
    lowerLimit: number
    unit: string
}

export default function Continuum({
    title,
    upperLimit,
    lowerLimit,
    unit
}: ContinuumProps): ReactElement {
    return (
        <div className="title">{title}</div>
        
    )
}