import { Link } from "react-router-dom";
import  { fetchData } from "../services/apicall";



function Header(){

  
return (

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link onClick={()=>fetchData({url:'test/getDetail'})} >Detail</Link></li>
      <li class="active"><Link onClick={()=>fetchData({url:'test/getInfo'})} >Info</Link></li>
     
      
    </ul>
  </div>
</nav>


);


}
export default Header;