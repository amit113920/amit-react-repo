import apicall, { fetchData } from "../services/apicall";



function Header(){

  const call=()=>{
    const val=fetchData();
   // alert(val);
  };
return (

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><button onClick={call} >Home</button></li>
      <li><a href="/exam">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>


);


}
export default Header;