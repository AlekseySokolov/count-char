const sortStatusReducer = (state = '', action) => {
    switch (action.type) {
        case 'SORT_ASC' :
            return state = 'asc'
        case  'SORT_DESC' :
            return state = 'desc'
        case 'RESET_SORT' :
            return state = ''
        default :
            return state
    }
}

export default sortStatusReducer;