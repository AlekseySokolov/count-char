const sortAsc = (coll) => {
    return coll.sort((a, b) => a.count - b.count)
}

export default sortAsc;