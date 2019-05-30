const sortAsc = (coll) => {
    return coll.sort((a, b) => a.values().next().value - b.values().next().value)
}

export default sortAsc;