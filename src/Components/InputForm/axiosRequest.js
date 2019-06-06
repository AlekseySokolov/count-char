import axios from 'axios';

const axiosRequest = (url, getRequest, getList) => {
    axios.get('https://cors-anywhere.herokuapp.com/'+url)
        .then(response => {
            return getRequest(response.data) && getList(response.data)
        })
        .catch(() => {
            alert('Введите URL')
        })
}

export default axiosRequest;