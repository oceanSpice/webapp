import React, { ReactElement } from "react";

type GraphTileProps = {
    title: string
    children: ReactElement
}

export default function GraphTile({
    title,
    children
}: GraphTileProps): ReactElement {
    return (
        <div className="graphTile">
            <h2>{title}</h2>
            {children}
        </div>
    )
}