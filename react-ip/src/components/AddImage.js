import React,{Component} from 'react';
import {connect} from 'react-redux';

class AddImages extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
    }
    add(e){
        e.preventDefault();
    }
    render(){
        return(
            <div className = "container col-lg-9">
                <form className="form-horizontal" onSubmit={this.add}>
                    <label className="control-label">Product ID</label>
                    <div className="form-group">
                        <div className="col-lg-1 ">
                            <input type="text" className="form-control" value="1"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Add Images</label>
                        <input type="file" className="form-control" value="ProductId"/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AddImages);