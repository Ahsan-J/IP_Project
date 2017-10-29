import React,{Component} from 'react';
import {connect} from 'react-redux';

class AddColor extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:'#000000'
        }
        this.add = this.add.bind(this);
    }
    add(e){
        e.preventDefault();
        let params = {
            data :{
                color_code : this.state.selected
            }
        }
        console.log(this.refs.color.value);
    }
    render(){
        return(
            <div className = "container col-lg-9" >
                <form className="form-horizontal" onSubmit={this.add}>
                    <fieldset>
                        <legend>Add a Color Code</legend>
                        <div className="form-group">
                            <label htmlFor="Name" className="col-lg-2 control-label">Color</label>
                            <div className="col-lg-1">
                                <input type="color" onChange ={()=>{this.setState({selected:this.refs.color.value})}} className="form-control" ref="color" id="Name" placeholder="Unknown"/>
                            </div>
                            <div className="col-lg-2">
                                <input type="text" disabled className="form-control"  value={this.state.selected}/>
                            </div>
                        </div>
                        
                        <div className="form-group">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Add Color</button>
                        </div>
                        </div>
                    </fieldset>
                    </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{

    }
}

const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddColor);