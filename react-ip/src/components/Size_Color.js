import React,{Component} from 'react';
import {connect} from 'react-redux';

class Size_Color extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.handleAccountRadio = this.handleAccountRadio.bind(this);
        this.renderSizeColor = this.renderSizeColor.bind(this);
        this.state ={
            size:"Single",
        }
    }
    add(e){
        e.preventDefault();
    }
    renderSizeColor(){
        if(this.state.size === "Single"){
            return (
                <span>
                    <SingleSize/>
                    <div className="form-group pull-right">
                        <button className="btn btn-default">another size</button>
                    </div>
                </span>
            );
        }
        else if(this.state.size === "Multiple") {
            return (
                <div className="form-group">
                    <label for="select" class="col-lg-2 control-label">Size Set</label>
                    <div class="col-lg-10">
                        <select class="form-control" id="select">

                        </select>
                    </div>
                </div>
            );
        }
    }
    handleAccountRadio(e){
        this.setState({size:e.currentTarget.value});
    }
    render(){
        return(
            <div className = "container col-lg-9">
                <form className="form-horizontal" onSubmit={this.add}>
                <div className="form-group">
                    <label className="col-lg-2 control-label ">Define Size</label>
                    <div className="col-lg-5">
                    <div className="radio">
                        <label>
                        <input type="radio" name="sizeTypeRadio" id="SingleRadio" value="Single" onChange ={this.handleAccountRadio} checked={this.state.size==="Single"}/>
                            Add Single Size and Color for Product
                        </label>
                        <label>
                        <input type="radio" name="sizeTypeRadio" id="MultipleRadios" value="Multiple" onChange ={this.handleAccountRadio} checked={this.state.size==="Multiple"}/>
                            Add Product for Size Set and Color
                        </label>
                        </div>
                    </div>
                </div>
                    {this.renderSizeColor()}
                    <br/>
                    <br/>
                    <hr/>
                    <div className="form-group pull-right">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Size_Color);

class SingleSize extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:'#000000'
        }
    }
    render(){
        return(
            <div className="form-group">
                <label for="size" className="col-lg-2 control-label">Product ID</label>
                <div className="col-lg-1">
                    <input className="form-control"/>
                </div>
                <label for="size" className="col-lg-1 control-label">Size</label>
                <div className="col-lg-3">
                    <select className="form-control" id="select">
                    
                    </select>
                </div>
                <label for="color" className="col-lg-1 control-label">Color</label>
                <div className="col-lg-1">
                    <input type="color" onChange ={()=>{this.setState({selected:this.refs.color.value})}} className="form-control" ref="color" id="Name" placeholder="Unknown"/>
                </div>
                <div className="col-lg-2">
                    <input type="text" disabled className="form-control"  value={this.state.selected}/>
                </div>
            </div>
        );
    }
}