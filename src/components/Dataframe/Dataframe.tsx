import React, { ReactNode, useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import styles from './Dataframe.module.css'

type DataFrameProps = {
    title: string
    userDataTokenName: string | undefined
    OCEANCol: number[] | undefined
    DTCol: number[] | undefined
}

export default function DataFrame({
    title,
    userDataTokenName,
    OCEANCol,
    DTCol
}: DataFrameProps) {
    // 'OCEAN Token' column made out of linspace(initialBalanceOCEAN, 0, 10)
    // 'userDataTokenName' column made out of linspace(initialBalanceDT, 0, 10)
    const [rows, setRows] = useState<any[]>()
    const [loadingDF, setLoadingDF] = useState<boolean>()

    const makeTable = () => {
        setLoadingDF(true)
        const size = 10
        let rows = [];
        for (var i = 0; i < size; i++) {
            let rowID = `row${i}`
            let cell = []
            for (var idx = 0; idx < size; idx++){
                let cellID = `cell${i}-${idx}`
                cell.push(<td key={cellID} id={cellID}></td>)
            }
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        setRows(rows)
        setLoadingDF(false)
    }

    useEffect(() => {
        makeTable()
    }, [])

    return loadingDF ? (
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    ) : (
        <Loader message={"Loading data frame... give us a few..."} />
    )
}
