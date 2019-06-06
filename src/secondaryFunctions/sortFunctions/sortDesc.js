const sortDesc = (coll) => {
    return coll.sort((a, b) => b.count - a.count)
}

export default sortDesc;