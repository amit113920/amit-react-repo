import axios from 'axios';





export const loginFetch=async(props)=>{
  //axios.defaults.baseURL = 'http://localhost:8081';
  //axios.defaults.headers.common['host']='localhost:8081';
  axios.post(props.url,{user_id:'amit',password:'amit'})
  .then(resp=>{
    window.sessionStorage.setItem('token',resp.data.data.token);
    window.sessionStorage.setItem('user_id',resp.data.data.user_id);
    axios.defaults.headers.Authorization='Bearer '+resp.data.data.token;
    axios.defaults.headers.common['user_id'] =resp.data.data.user_id;
    //axios.defaults.headers.common['Origin'] ='http://localhost:3000';
  })
  .catch(error=>{

    alert(error.error);
  });
}


export const fetchData = async (props) => { 

    axios.get(props.url)
    .then(resp=>{
      
    })
    .catch(error=>{
  
      alert(error.error);
    });

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
