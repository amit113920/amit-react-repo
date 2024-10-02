import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 1000,
    headers: {'Host': 'localhost:8081'}
});

export const fetchData = async (props) => {
    
    
    //try {
         apiClient.get(props.url)
        .then((resp)=>{alert(resp.data)})
        .catch((err)=>{alert(err.headers)});
        
        //return response.data;
    //} catch (error) {
        //console.error('Error fetching data:', error);
       // throw error;
    //}
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
