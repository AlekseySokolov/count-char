const sortDesc = (coll) => {
    return coll.sort((a, b) => Object.values(b) - Object.values(a))
}

export default sortDesc;