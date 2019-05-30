export const getRequest = (payload) => ({type : 'GET_REQUEST', payload : payload});
export const getList = (payload) => ({type : 'GET_LIST', payload : payload});
export const asc = (payload) => ({type:'SORT_ASC', payload : payload});
export const desc = (payload) => ({type:'SORT_DESC', payload : payload});