const addToColl = (obj) => {
    const collection = [];
    for(let key in obj) {
        collection.push( {[key] : obj[key]} )
    };
    return collection;
}

export default addToColl;