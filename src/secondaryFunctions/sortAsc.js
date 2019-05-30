const sortAsc = (coll) => {
    return coll.sort((a, b) => Object.values(a) - Object.values(b))
}

export default sortAsc;