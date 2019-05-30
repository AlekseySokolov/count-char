const numberOfCharacters = (html) => {
    const myMap = new Map();
    const coll = [];
    const allCharactersInAnArray = html.split('');
    allCharactersInAnArray.forEach(i => {
        myMap.has(i) ? myMap.get(i).quantity += 1: myMap.set(i, {quantity : 1})
    });
    myMap.forEach((value, key) => coll.push({ [key] : value.quantity }));
    return coll;
}

export default numberOfCharacters;