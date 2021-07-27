import React, { ReactElement } from "react"
import Continuum from "../../atoms/Continuum/Continuum"

export default function ScenarioOptions(): ReactElement {
    return (
        <div>
            <Continuum 
                title={"Target Price per Datatoken"}
                upperLimit={10000}
                lowerLimit={1}
                unit={"$OCEAN"}
            />
            <Continuum 
                title={"$OCEAN for initial liquidity"}
                upperLimit={1410000000}
                lowerLimit={21}
                unit={"$OCEAN"}
            />
            <Continuum 
                title={"Swap Fee (%)"}
                upperLimit={10}
                lowerLimit={0.1}
                unit={"%"}
            />
        </div>
    )
}