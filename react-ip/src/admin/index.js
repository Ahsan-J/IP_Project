import React,{Component} from 'react';
import {connect} from 'react-redux';
import './sideNavBar.css';
import NavBar from '../components/navBar.js';
import ViewUser from '../components/ViewUser.js';
import AddUser from '../components/AddUser.js';
import AddCategory from '../components/AddCategory.js';
import AddImage from '../components/AddImage.js';
import AddProduct from '../components/AddProduct.js';
import Size_Color from '../components/Size_Color';
import {resetAlert} from '../redux/actions/generalActions.js'
import AddColor from '../components/AddColor.js'

class Panel extends Component{
    constructor(props){
        super(props);
        this.addCategory = this.addCategory.bind(this);
        this.state = {
            mainMenus : ['User','Products','Sale','Statistics'],
            userMenu : ['View User','Add User'],
            productMenu : ['View Product','Add Product','Add Category','Add Color'],
            alert:true,
        }
        this.productProcess = this.productProcess.bind(this);
        this.successAlert = this.successAlert.bind(this);
    }
    addCategory(){
        console.log(this.refs.categoryName.value);
    }
    successAlert(){
        if(this.props.alert){
            if(this.props.error){
                return(
                    <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
                    </div>
                );
            } else {
                return (
                    <div className="alert alert-dismissible alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
                    </div>
                );
            }
        }
    }
    componentDidMount(){
        if(this.props.resetAlert){
            setTimeout(()=>{this.props.resetAlert()}, 3000);
        }
    }
    productProcess(){
        switch(this.props.productPhase){
            case 1 :
                return (<AddProduct/>)
            case 2:
                return (<Size_Color/>)
            case 3 : 
                return (<AddImage/>)
            default : null
        }
    }
    getMenu(MenuItem){
        const html = MenuItem.map(function(item,index){
            if(index===0){
                return(
                    <li className="active" key={index} index = {index}>
                        <a href={'#'+item.replace(/\s+/g,'')} data-toggle="tab">{item}</a>
                    </li>
                );
            }
            else{
                return(
                <li key={index} index = {index}>
                    <a href={'#'+item.replace(/\s+/g,'')} data-toggle="tab">{item}</a>
                </li>
                );
            }
        })
    return html;
    }
    render(){
        return (
            <div>
                <NavBar/>
            <div className="container">
                {this.successAlert()}
                <h1> The Admin Panel </h1>
                <ul className="nav nav-tabs">
                    {this.getMenu(this.state.mainMenus)}
                </ul>

                <div style={{margin:20}}></div>
                    <div id="adminTabContent" className="tab-content">
                        {/*User*/}
                        <div className="tab-pane fade active in" id={this.state.mainMenus[0].replace(/\s+/g,'')}>

                        <ul className="nav nav-pills nav-stacked col-lg-2">
                            {this.getMenu(this.state.userMenu)}
                        </ul>

                        <div id={this.state.mainMenus[0].replace(/\s+/g,'')+'Content'} className="tab-content">
                            <div id={this.state.userMenu[0].replace(/\s+/g,'')} className=" tab-pane active in">
                                <ViewUser/>   
                            </div>          
                            <div id={this.state.userMenu[1].replace(/\s+/g,'')} className=" tab-pane">
                                <AddUser/>
                            </div>
                        </div>

                        </div>
                    {/*Products*/}
                    <div className="tab-pane fade" id={this.state.mainMenus[1].replace(/\s+/g,'')}>
                    
                    <ul className="nav nav-pills nav-stacked col-lg-2">
                        {this.getMenu(this.state.productMenu)}
                    {/* Add Category','Add Color'
                        <li className="active"><a href="#ViewProduct" data-toggle="tab">View Product</a></li>
                        <li><a href="#ViewProduct" data-toggle="tab">Add Product</a></li>
                            <li className="disabled col-lg-offset-2"><a className="col-lg-offset-2">Images</a></li>
                            <li className="disabled col-lg-offset-2"><a className="col-lg-offset-2">Images</a></li> */}
                    
                    </ul>

                    <div id={this.state.mainMenus[1].replace(/\s+/g,'')+'Content'} className="tab-content">
                        <div id={this.state.productMenu[0].replace(/\s+/g,'')} className=" tab-pane active in">
                            first content here
                        </div>
                        <div id={this.state.productMenu[1].replace(/\s+/g,'')} className=" tab-pane">
                            {this.productProcess()}
                        </div>
                        <div id={this.state.productMenu[2].replace(/\s+/g,'')} className=" tab-pane">
                            <AddCategory/>
                        </div>
                        <div id={this.state.productMenu[3].replace(/\s+/g,'')} className=" tab-pane">
                            <AddColor/>
                        </div>
                    </div>
                    
                    </div>
                    {/*Sale*/}
                    <div className="tab-pane fade" id={this.state.mainMenus[2].replace(/\s+/g,'')}>
                    
                    <ul className="nav nav-pills nav-stacked col-lg-2">
                        <li className="active"><a href="#viewUser" data-toggle="tab">View User</a></li>
                        <li><a href="#addUser" data-toggle="tab">Add User</a></li>
                    </ul>

                    <div id="userContent" className="tab-content">
                        <div id="viewUser" className=" tab-pane active in">first content here</div>
                        <div id="addUser" className=" tab-pane"></div>
                    </div>

                    </div>
                    <div className="tab-pane fade" id={this.state.mainMenus[3].replace(/\s+/g,'')}>
                        <p>Will be created Soon :) </p>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        error: state.generalReducer.error,
        alert : state.generalReducer.alert,
        productPhase : state.productReducer.phase,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        resetAlert : ()=>{dispatch(resetAlert())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Panel);