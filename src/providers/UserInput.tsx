import React, {
    useContext,
    createContext,
    ReactElement,
    ReactNode,
    useState,
    useEffect,
} from 'react'
import { calcColumnDT, calcColumnOCEAN, calculateInvariants, linspace } from '../utils/calcs'

interface UserInputProviderValue {
    aBalance: number,
    bBalance: number,
    userDataTokenName: string | undefined,
    initialBalanceOCEAN: number | undefined,
    initialBalanceDT: number | undefined,
    swapFee: number | undefined,
    setUserDataTokenName: (newValue: string) => void,
    setInitialBalanceOCEAN: (newValue: number) => void,
    setInitialBalanceDT: (newValue: number) => void,
    setSwapFee: (newValue: number) => void,
    oceanCol: number[] | undefined,
    DTCol: number[] | undefined,
    invariant: number | undefined,
    setClear: () => void
    loadingGraphData: boolean
}

const UserInputContext = createContext({} as UserInputProviderValue)

function UserInputProvider({ children }: { children: ReactNode }): ReactElement {
    const [aBalance, setABalance] = useState<number>(0.7)
    const [bBalance, setBBalance] = useState<number>(0.3)
    
    // user input values
    const [userDataTokenName, setUserDataTokenName] = useState<string>('Your DataToken')
    const [initialBalanceOCEAN, setInitialBalanceOCEAN] = useState<number>()
    const [initialBalanceDT, setInitialBalanceDT] = useState<number>()
    const [swapFee, setSwapFee] = useState<number>()

    // calculated values
    const [oceanCol, setOceanCol] = useState<number[]>()
    const [DTCol, setDTCol] = useState<number[]>()
    const [invariant, setInvariant] = useState<number>()

    // signals for loading signs and auto-clearing variables
    const [clear, setClear] = useState<boolean>(false)
    const [loadingGraphData, setLoadingGraphData] = useState<boolean>(false)

    const SetUserDataTokenName = (newValue: string) => {
        setUserDataTokenName(newValue)
    }

    const SetInitialBalanceOCEAN = (newValue: number) => {
        setInitialBalanceOCEAN(newValue) 
    }

    const SetInitialBalanceDT = (newValue: number) => {
        setInitialBalanceDT(newValue)
    }

    const SetSwapFee = (newValue: number) => {
        setSwapFee(newValue)
    }

    const SetClear = () => {
        setClear(true)
    }

    const resetAllUserInputs = () => {
        setInitialBalanceOCEAN(undefined)
        setInitialBalanceDT(undefined)
        setSwapFee(undefined)
        setUserDataTokenName('Your DataToken')
    }

    /*****************/
    /** USE EFFECTS **/
    /*****************/
    // If all three values are in, calculations execute.
    useEffect(() => {
        if (initialBalanceOCEAN && initialBalanceDT && swapFee) {
            setLoadingGraphData(true)
            const inv = calculateInvariants(initialBalanceOCEAN, initialBalanceDT)
            const OCEANlinspace = linspace(initialBalanceOCEAN, 0, 10)
            const DTlinspace = linspace(initialBalanceDT, 0, 10)
            const OCEANcol = calcColumnOCEAN(inv, DTlinspace)
            const DTcol = calcColumnDT(inv, OCEANlinspace)
            setOceanCol(OCEANcol)
            setDTCol(DTcol)
            setInvariant(inv)
            setLoadingGraphData(false)
        }
    }, [initialBalanceOCEAN, initialBalanceDT, swapFee])

    useEffect(() => {
        if (clear) {
            resetAllUserInputs()
        }
        setClear(false)
    }, [clear])

    return (
        <UserInputContext.Provider
            value={{
               aBalance,
               bBalance,
               userDataTokenName,
               initialBalanceOCEAN,
               initialBalanceDT,
               swapFee,
               setUserDataTokenName: SetUserDataTokenName,
               setInitialBalanceOCEAN: SetInitialBalanceOCEAN,
               setInitialBalanceDT: SetInitialBalanceDT,
               setSwapFee: SetSwapFee,
               oceanCol,
               DTCol,
               invariant,
               setClear: SetClear,
               loadingGraphData
            }}
        >
        {children}
        </UserInputContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useUserInput = (): UserInputProviderValue => useContext(UserInputContext)
  
export { UserInputProvider, useUserInput, UserInputContext }
export type { UserInputProviderValue }
export default UserInputProvider