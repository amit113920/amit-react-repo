import { Link } from "react-router-dom";
import apicall, { fetchData } from "../services/apicall";



function Header(){

  
return (

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link onClick={()=>fetchData({url:'test/getDetail'})} >Detail</Link></li>
      <li class="active"><Link onClick={()=>fetchData({url:'test/getInfo'})} >Info</Link></li>
     
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>


);


}
export default Header;