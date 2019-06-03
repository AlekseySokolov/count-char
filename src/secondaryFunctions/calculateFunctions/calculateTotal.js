import toColl from '../conversionFunctions/toColl';

const calculateTotal = (obj) => {
    return toColl(obj).reduce((acc ,obj) =>
        acc.concat(Object.values(obj)) ,[])
        .reduce((a, b) => a + b, 0)
}

export default calculateTotal;
