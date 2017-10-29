import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addCategory,getParentCategory,getAllSubCategory} from '../redux/axios/productAxios.js'

class AddCategory extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.renderParentOptions = this.renderParentOptions.bind(this);
        this.renderAllSubCategories = this.renderAllSubCategories.bind(this);    
        this.props.getAllSubCategory();
        this.props.getParentCategory();
    }
    add(e){
        e.preventDefault();
        let params = {
            data :{
                name : this.refs.categoryName.value,
                parentId : parseInt(this.refs.parentId.value)
            }
        }
        console.log(params);
        this.props.addNewCategory(params);
    }
    renderParentOptions(){
        let html;
        if(this.props.parentCategory){
            html = this.props.parentCategory.map(function(item,index){
                return (<option key={item.id} value={item.id}>{item.Name}</option>);
            });
        }
        return html;
    }
    renderAllSubCategories(){
        let html;
        if(this.props.allSubCategory){
            html = this.props.allSubCategory.map(function(item,index){
                return (
                    <tr key={index}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {item.Name}
                        </td>
                        <td>
                            {item.gender}
                        </td>
                    </tr>
                );
            });
        }
        return html;
    }
    render(){
        return(
        <div className = "container col-lg-9">
            <table className="table table-responsive table-bordered table-striped table-hover ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAllSubCategories()}
                </tbody>
            </table>
            <hr/>
            <form className="form-horizontal" onSubmit={this.add}>
                <div className="form-group">
                    <label className="control-label">Add Category</label>
                    <div className="input-group">
                        <span className= "col-lg-10">
                            <input type="text" className="form-control" ref="categoryName" placeholder="Category Name"/>
                        </span>
                        <span className="col-lg-2">
                            <select className="form-control" ref="parentId">
                                {this.renderParentOptions()}
                            </select>
                        </span>
                        <div className="input-group-btn">
                            <input className="btn btn-success" type="submit" value="Add Category"/>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        parentCategory : state.productReducer.parentCategory,
        allSubCategory : state.productReducer.allSubCategory,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addNewCategory : (params) => {dispatch(addCategory(params))},
        getParentCategory : ()=>{dispatch(getParentCategory())},
        getAllSubCategory : ()=>{dispatch(getAllSubCategory())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCategory);