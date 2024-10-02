import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:444',
    timeout: 1000,
    headers: {'host': 'localhost:444'}
});

export const fetchData = async () => {
    alert('api start');
    try {
        const response = await apiClient.get('/login');
        alert('api call end');
        //return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
    export const fetchPost=async()=>{

        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
