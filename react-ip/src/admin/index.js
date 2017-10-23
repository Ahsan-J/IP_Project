import React,{Component} from 'react';
import './sideNavBar.css';

class Panel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand Name</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Link</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    
            <div className="container">
                <h1> The Admin Panel </h1>
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#User" data-toggle="tab">User</a></li>
                    <li><a href="#Products" data-toggle="tab">Products</a></li>
                    <li><a href="#Sale" data-toggle = "tab">Sale</a></li>
                    <li><a href="#Statistics" data-toggle="tab">Statistics</a></li>
                </ul>

                <div style={{margin:20}}></div>
                    
                    <div id="myTabContent" className="tab-content">
                        {/*User*/}
                        <div className="tab-pane fade active in" id="User">
                        
                        <ul className="nav nav-pills nav-stacked col-lg-2">
                            <li className="active"><a href="#viewUser" data-toggle="tab">View User</a></li>
                            <li><a href="#addUser" data-toggle="tab">Add User</a></li>
                        </ul>

                        <div id="userContent" className="tab-content">
                            {/*View User*/}
                            <div id="viewUser" className=" tab-pane active in">
                                <div className = "container col-lg-9">
                                <table class="table table-responsive table-striped table-hover ">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Contact</th>
                                            <th>NIC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                    </table> 
                                </div>
                            </div>
                            <div id="addUser" className=" tab-pane">
                            <div className = "container col-lg-9">
                                
                            </div>
                            </div>
                        </div>

                        </div>
                    {/*Products*/}
                    <div className="tab-pane fade" id="Products">
                    
                    <ul className="nav nav-pills nav-stacked col-lg-2">
                        <li className="active"><a href="#viewUser" data-toggle="tab">View User</a></li>
                        <li><a href="#addUser" data-toggle="tab">Add User</a></li>
                    </ul>

                    <div id="userContent" className="tab-content">
                        <div id="viewUser" className=" tab-pane active in">first content here</div>
                        <div id="addUser" className=" tab-pane"></div>
                    </div>
                    
                    </div>
                    {/*Sale*/}
                    <div className="tab-pane fade" id="Sale">
                    
                    <ul className="nav nav-pills nav-stacked col-lg-2">
                        <li className="active"><a href="#viewUser" data-toggle="tab">View User</a></li>
                        <li><a href="#addUser" data-toggle="tab">Add User</a></li>
                    </ul>

                    <div id="userContent" className="tab-content">
                        <div id="viewUser" className=" tab-pane active in">first content here</div>
                        <div id="addUser" className=" tab-pane"></div>
                    </div>

                    </div>
                    <div className="tab-pane fade" id="Statistics">

                        {/* <ul className="nav nav-pills nav-stacked col-lg-2">
                            <li className="active"><a href="#viewUser" data-toggle="tab">View User</a></li>
                            <li><a href="#addUser" data-toggle="tab">Add User</a></li>
                        </ul>

                        <div id="userContent" className="tab-content">
                            <div id="viewUser" className=" tab-pane active in">first content here</div>
                            <div id="addUser" className=" tab-pane"></div>
                        </div> */}

                        <p>Will be created Soon :) </p>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Panel;