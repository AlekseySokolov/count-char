const calculatePercentage = (obj, totalAmount) =>
    Object.values(obj)
        .reduce((acc, value) =>
                totalAmount = value / totalAmount * 100
            ,totalAmount).toFixed(3)

export default calculatePercentage;


