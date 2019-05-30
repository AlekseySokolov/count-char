const sortDesc = (coll) => {
    return coll.sort((a, b) => b.values().next().value - a.values().next().value)
}

export default sortDesc;