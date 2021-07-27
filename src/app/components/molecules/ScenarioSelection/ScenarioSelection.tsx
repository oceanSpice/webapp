import React, { ReactElement } from "react"
import Scenario from "../../atoms/Scenario/Scenario"

export default function ScenarioSelection(): ReactElement {
    // PLACEHOLDER.
    // TODO: Remove placeholder
    const scenarios = [
        {
            name: "Scenario 1",
            description: "Scenario 1 description here"
        },
        {
            name: "Scenario 2",
            description: "Scenario 2 description here"
        },
        {
            name: "Scenario 1",
            description: "Scenario 3 description here"
        },
    ]
    
    return (
        <div>
            {scenarios.map((item: any, i: number) => {
                return (
                    <Scenario
                        key={i.toString()}
                        name={item.name}
                        explanation={item.description}
                    />
                )
            })}
        </div>
    )
}