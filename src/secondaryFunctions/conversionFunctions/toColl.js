import filterHTML from './filterHTML';
import calcPercentage from './calcPercentage';

const toColl = (html) => {
    const symbols = filterHTML(html).split(''),
          total = symbols.length,
          data = symbols.reduce((acc, sym) => {
            if(acc[sym] === undefined) {
             acc[sym] = {
              char : sym,
              count : 1 ,
              percentOfTotal : calcPercentage(1, total)
            }
            } else {
              acc[sym].count += 1;
              acc[sym].percentOfTotal = calcPercentage(acc[sym].count, total);
            }
            return acc
          } ,{});

    return Object.values(data);
};

export default toColl;
