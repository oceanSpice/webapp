import React, { ReactNode, useState } from 'react'
import Loader from '../Loader/Loader'

type GraphProps = {
    title: string
    userDataTokenName: string | undefined
    OCEANCol: number[] | undefined
    DTCol: number[] | undefined
}

export default function Graph({
    title,
    userDataTokenName,
    OCEANCol,
    DTCol
}: GraphProps) {
    const [loadingGraph, setLoadingGraph] = useState<boolean>(false)
    
    return (
        <>
            {loadingGraph ? (
                <Loader message={"Loading your graph..."}/>
            ) : (
                <></>
            )}
        </>
    )
}