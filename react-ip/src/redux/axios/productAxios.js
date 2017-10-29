import axios from 'axios';
import constants from '../../config/constants.js';
import {setParentCategory,setAllSubCategory} from '../actions/productAction.js';
import {alert} from '../actions/generalActions.js'
import {setPhase} from '../actions/productAction.js'

export function addCategory(params){
    return dispatch=> {
        axios({
            method:'post',
            data : params.data,
            url:constants.baseUrl+constants.port+'/Category/add'
        }).then(function(result){
            console.log(result);
            dispatch(alert(false));
        }).catch(function(err){
            dispatch(alert(true));
        });
    }
}

export function getParentCategory(){
    return dispatch=> {
        axios({
            method:'get',
            url:constants.baseUrl+constants.port+'/Category/getParentCategory'
        }).then(function(result){
            dispatch(setParentCategory(result.data));
        }).catch(function(err){
            console.log(typeof err);
            dispatch(alert(true));
        });
    }
}

export function getAllSubCategory(){
    return dispatch=> {
        axios({
            method:'get',
            url:constants.baseUrl+constants.port+'/Category/getAllSubCategory'
        }).then(function(result){
            dispatch(setAllSubCategory(result.data));
        }).catch(function(err){
            console.log(err);
            dispatch(alert(true));
        });
    }
}

export function addProduct(params){
    return dispatch=> {
        axios({
            method:'post',
            data : params.data,
            url:constants.baseUrl+constants.port+'/Products/add'
        }).then(function(result){
            console.log(result);
            dispatch(setPhase(2));
            dispatch(alert(false));
        }).catch(function (err){
            console.log(err);
            dispatch(alert(true));
        })
    }
}

export function addColorCode(params){
    return dispatch=>{
        axios({
            method:'post',
            data:params.data,
            url:constants.baseUrl+constants.port+''
        }).then(function(result){
            console.log(result);
            dispatch(alert(false));
        }).catch(function(err){
            console.log(err);
            dispatch(alert(true));
        })
    }
}

export function addImages(params){
    return dispatch=>{
        axios({
            method:'post',
            data:params.data,
            url:constants.baseUrl+constants.port+''
        }).then(function(result){
            console.log(result);
            dispatch(setPhase(3));
            dispatch(alert(false));
        }).catch(function(err){
            console.log(err);
            dispatch(alert(true));
        })
    }
}