import React, { useEffect, useState } from 'react'
import InputElement from '../InputElement/InputElement'
import styles from './Simulate.module.css'
import { useUserInput } from "../../providers/UserInput";
import Button from '../Button/Button';

type SimulateProps = {
    simulate: () => void
}

export default function Simulate({
    simulate
}: SimulateProps) {
    const { 
        userDataTokenName,
        initialBalanceOCEAN,
        initialBalanceDT,
        swapFee, 
        setUserDataTokenName,
        setInitialBalanceOCEAN,
        setInitialBalanceDT,
        setSwapFee,
    } = useUserInput()

    const [simulateActive, setSimulateActive] = useState<boolean>()

    useEffect(() => {
        if (userDataTokenName && initialBalanceOCEAN && initialBalanceDT && swapFee) {
            setSimulateActive(true)
        }
    }, [userDataTokenName, initialBalanceOCEAN, initialBalanceDT, swapFee])

    return (
        <div className={styles.simulateWrapper}>
            <div className={styles.namePos}>
                <InputElement 
                    name={"UserDataTokenName"} 
                    label={"Name your datatoken: "} 
                    includesButton={true}
                    onEnter={setUserDataTokenName}
                />
            </div>
            
            <div className={styles.grid}>
                <InputElement 
                    name={"OceanBalance"} 
                    label={"Initial Balance (OCEAN): "} 
                    includesButton={true}
                    onEnter={setInitialBalanceOCEAN}
                />
                <InputElement 
                    name={"DataTokenBalance"} 
                    label={`Initial Balance (${userDataTokenName}): `} 
                    includesButton={true}
                    onEnter={setInitialBalanceDT}
                />
                <InputElement 
                    name={"SwapFee"} 
                    label={"Swap Fee: "} 
                    includesButton={true}
                    onEnter={setSwapFee}
                />
            </div>

            <div className={styles.values}>
                <p><b>Your DataToken name: </b> {userDataTokenName}
                <br />
                <b>Initial Balance of OCEAN: </b> {initialBalanceOCEAN}
                <br />
                <b>Initial Balance of {userDataTokenName}: </b> {initialBalanceDT}
                <br />
                <b>Swap fee: </b> {swapFee}</p>
            </div>
            

            <div className={styles.buttonPos}>
                <Button 
                    title={"Simulate"} 
                    active={simulateActive}
                    onClick={(e) => simulate()}
                />
            </div>
        </div>
    )
}