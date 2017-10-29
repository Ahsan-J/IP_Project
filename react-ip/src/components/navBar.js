import React,{Component} from 'react';

class NavBar extends Component{
    render(){
        return(
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">EyeConic</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><button className="btn btn-default">Sign Out</button></a></li>
            </ul>
            </div>
        </div>
        </nav>
        );
    }
}
export default NavBar;