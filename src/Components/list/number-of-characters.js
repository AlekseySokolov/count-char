const numberOfCharacters = (html) => {
    const myMap = new Map();
    const myObj = {};
    const allCharactersInAnArray = html.split('');
    allCharactersInAnArray.forEach(i => {
        myMap.has(i) ? myMap.get(i).quantity += 1: myMap.set(i, {quantity : 1})
    });
    console.log(myMap);
    myMap.forEach((value, key) => myObj[key] = value.quantity);
    const sortedСharactersInTheArray = [...Object.entries(myObj)].sort();
    return sortedСharactersInTheArray;
}

export default numberOfCharacters;