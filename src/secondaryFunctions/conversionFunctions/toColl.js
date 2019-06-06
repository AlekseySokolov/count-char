import filterHTML from './filterHTML';
import addToColl from './addToColl';
import calculateTotal from '../calculateFunctions/calculateTotal';


const toColl = (html) => {
    const symbols = filterHTML(html).split('');
    const countingValues = symbols.reduce((acc, symbol) => {
        acc[symbol] === undefined ? acc[symbol] = 1 : acc[symbol] += 1;
        return acc;
    }, {});
    const totalAmount = calculateTotal(countingValues);

    return addToColl(countingValues, totalAmount);
};

export default toColl;