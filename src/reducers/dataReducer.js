const filterHTML = (string) => {
    return string.replace(/<script[^>]*?>[\s\S]*?<\/script>/g,'').replace(/(\<(\/?[^>]+)>)/g,'')
}

const dataReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_REQUEST' :
            return state = filterHTML(action.payload)
        default :
            return state
    }
}

export default dataReducer;