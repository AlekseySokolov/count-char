import axios from 'axios';

const axiosRequest = (url, getRequest) => {
    axios.get('https://cors-anywhere.herokuapp.com/'+url)
        .then(response => {
            return getRequest(response.data)
        })
}

export default axiosRequest;