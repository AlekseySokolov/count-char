const calculateTotal = (obj) => {
    return Object.values(obj).reduce((acc , value) => acc + value, 0)
}

export default calculateTotal;
