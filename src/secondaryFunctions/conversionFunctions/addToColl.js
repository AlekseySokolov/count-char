const addToColl = (obj, totalAmount) => {
    const collection = [];
    for(let key in obj) {
        collection.push(
            {
                char : [key].join(''),
                count : obj[key] ,
                percentOfTotal : (obj[key] / totalAmount * 100).toFixed(3)
            }
        );
    };
    return collection;
}

export default addToColl;