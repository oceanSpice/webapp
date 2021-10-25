import { useState } from 'react';
import styles from './GraphPage.module.css';
import { useUserInput } from "../../providers/UserInput";
import Button from '../Button/Button';
import Graph from '../Graph/Graph';
import Loader from '../Loader/Loader';
import DataFrame from '../Dataframe/Dataframe';

type GraphPageProps = {
    goBack: () => void
    save: () => void
}

export default function GraphPage({
    goBack,
    save
}: GraphPageProps) {
    const { 
        loadingGraphData,
        userDataTokenName, 
        oceanCol,
        DTCol
    } = useUserInput()

    const [showingType, changeShowingType] = useState<string>('graph')

    const changeType = (newType: string) => {
        console.log(`CHANGING TYPE TO... `)
        console.log(newType)
        changeShowingType(newType)
    }

    return (
        <>
            {loadingGraphData ? (
                <Loader message={"Loading your simulation data. We'll be with you in a moment!"} /> 
            ) : (
                <div className={styles.background}>
                    <div className={styles.typeSelectorCollapser}>
                        <Button 
                            title={'GRAPH'} 
                            onClick={(e) => changeType('graph')} 
                        />
                        <Button 
                            title={'DATAFRAME'} 
                            onClick={(e) => changeType('dataframe')} 
                        />
                    </div>
                    <div className={styles.simulation}>
                        {showingType == 'graph' ? (
                            <Graph 
                                title={`AMM Simulation of ${userDataTokenName}`} 
                                userDataTokenName={userDataTokenName} 
                                OCEANCol={oceanCol} 
                                DTCol={DTCol}     
                            />
                        ) : showingType == 'dataframe' && (
                            <DataFrame 
                                title={`AMM Simulation of ${userDataTokenName}`} 
                                userDataTokenName={userDataTokenName} 
                                OCEANCol={oceanCol} 
                                DTCol={DTCol}                 
                            />
                        )}
                    </div>
                </div>
            )}

            <div className={styles.buttonPos}>
                <Button 
                    title={"Go Back"} 
                    onClick={(e) => goBack()}
                />

                <Button 
                    title={"Save"}
                    onClick={(e) => save()}
                />
            </div>
        </>
    )
}