import axios from 'axios';
import constants from '../../config/constants.js';

export function addUser(params){
    return dispatch=> {
        axios({
            method:'post',
            data : params.data,
            url:constants.baseUrl+constants.port+'/User/add'
        }).then(function(result){
            console.log(result);
            dispatch({type:''});
        }).catch(function(err){
            console.log(err);
            dispatch({type:''});
        });
    }
}
export function addProduct(params){
    return dispatch=> {
        axios({
            method:'post',
            data : params.data,
            url:constants.baseUrl+constants.port+'/Product/add'
        }).then(function(result){
            console.log(result);
            dispatch({type:''});
        }).catch(function (err){
            console.log(err);
            dispatch({type:''});
        })
    }
}