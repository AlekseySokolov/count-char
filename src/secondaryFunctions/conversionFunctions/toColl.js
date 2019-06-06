import filterHTML from './filterHTML';

const toColl = (html) => {
    const map = new Map();
    const symbols = filterHTML(html).split('');

    symbols.forEach(value => map.has(value) ?
    map.get(value).count += 1 :
    map.set(value, {char: value, count: 1}));

    const coll = [...map.values()];
    const totalAmount = coll.reduce((acc, obj) => acc + obj.count, 0);

    coll.forEach(obj =>
        obj.percentOfTotal = (obj.count / totalAmount * 100).toFixed(3));

    return coll;
}

export default toColl;
