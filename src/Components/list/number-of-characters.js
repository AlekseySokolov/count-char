const numberOfCharacters = (html) => {
    const myMap = new Map();
    const myObj = {};
    const allCharactersInAnArray = html.split('');
    allCharactersInAnArray.forEach(i => {
        myMap.has(i) ? myMap.get(i).quantity += 1: myMap.set(i, {quantity : 1})
    });
    Array.from(myMap).forEach(i => myObj[i[0]] = i[1].quantity);
    const sortedСharactersInTheArray = [...Object.entries(myObj)].sort();
    return sortedСharactersInTheArray;
}

export default numberOfCharacters;