import Content from "../content/content";
import Footer from "../footer/footer";
import Header from "../header/Header";

function Layout(){
    return(<>
    <div className="container">
    
    <Header/>
    </div >
    <div className="container" style={{backgroundColor:"white"}}> 
    <Content/>
    </div>
    <div className="container">
    <Footer/>
    </div>
    
    </>
    );
    
    }
    export default Layout;