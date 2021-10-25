const a_weight = 0.7
const b_weight = 0.3

export const calculateInvariants = (
    initialBalanceOCEAN: number, 
    initialBalanceDT: number
) => {
    return (initialBalanceOCEAN ** a_weight) * (initialBalanceDT ** b_weight)
}

export const linspace = (
    startValue: number,
    stopValue: number,
    cardinality: number
) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

export const calcColumnOCEAN = (inv: number, DTlinspace: number[]) => {
    var OCEANcolumn = []
    for (var i = 0; i < DTlinspace.length; i++) {
        const val = (inv / (DTlinspace[i]**b_weight))**(1/a_weight)
        OCEANcolumn.push(val)
    }
    return OCEANcolumn
}

export const calcColumnDT = (inv: number, OCEANlinspace: number[]) => {
    var DTcolumn = []
    for (var i = 0; i < OCEANlinspace.length; i++) {
        const val = (inv / (OCEANlinspace[i]**a_weight))**(1/b_weight)
        DTcolumn.push(val)
    }
    return DTcolumn
}

