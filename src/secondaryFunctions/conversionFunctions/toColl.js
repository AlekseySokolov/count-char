import filterHTML from './filterHTML';
import addToColl from './addToColl';

const toColl = (html) => {
    const symbols = filterHTML(html).split('');
    const countingValues = symbols.reduce((acc, symbol) => {
        acc[symbol] === undefined ? acc[symbol] = 1 : acc[symbol] += 1;
        return acc;
    }, {});

    return addToColl(countingValues);
};

export default toColl;