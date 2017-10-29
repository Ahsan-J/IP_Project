import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addProduct,getAllSubCategory} from '../redux/axios/productAxios.js'

class AddProduct extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.props.getAllSubCategory();
        this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
    }
    add(e){
        e.preventDefault();
        let params = {
            data :{
                description: this.refs.description.value,
                brandName:this.refs.name.value,
                price:this.refs.price.value,
                qualityClass: this.refs.quality.value,
            }
        }
        this.props.addNewProduct(params);
    }
    renderCategoryOptions(){
        let html;
        if(this.props.allSubCategory){
            html = this.props.allSubCategory.map(function(item,index){
                return (<option key={item.id} value={item.id}>{item.Name}({item.gender})</option>);
            });
        }
        return html;
    }
    render(){
        return(
            <div className = "container col-lg-9" >
                <form className="form-horizontal" onSubmit={this.add}>
                    <fieldset>
                        <legend>Add a New Product</legend>
                        <div className="form-group">
                            <label htmlFor="Name" className="col-lg-2 control-label">Brand Name</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" ref="name" id="Name" placeholder="Unknown"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="col-lg-2 control-label">Product Description</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows="2" required ref="description" id="description"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact" className="col-lg-2 control-label">Category</label>
                            <div className="col-lg-10 input-group">
                                <div className="col-lg-4">
                                    <select className="form-control" ref="country" id="countryCode">
                                        {this.renderCategoryOptions()}
                                    </select>
                                </div>
                                <label htmlFor="price" className="col-lg-offset-1 col-lg-2 control-label">Price</label>
                                <div className="col-lg-3">
                                    <input type="number" className="form-control" ref="price" placeholder="0"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="quality" class="col-lg-2 control-label">Quality Class</label>
                            <div class="col-lg-3">
                                <select class="form-control" ref="quality" id="quality">
                                    <option>Unknown</option>
                                    <option>S</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Add Product</button>
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
        allSubCategory : state.productReducer.allSubCategory,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getAllSubCategory : ()=>{dispatch(getAllSubCategory())},
        addNewProduct :(params)=> dispatch(addProduct(params)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);