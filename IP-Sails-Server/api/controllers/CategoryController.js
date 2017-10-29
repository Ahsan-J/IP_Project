/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add : function(req,res){
        Category.create({
            Name : req.body.name,
            parentId : req.body.parentId,
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            res.send(err);
        })
    },
    getParentCategory : function(req,res){
        Category.find({parentId:null}).then(function(result){
            res.send(result);
        }).catch(function(err){
            res.send(err);
        });
    },
    getAllSubCategory : function(req,res){
        Category.find({parentId:{'!':null}}).then(function(result){
            Category.find({parentId:null}).then(function(subResult){
                subResult.map(function(item,index){
                    result.map(function(data,count){
                        if(item.id==data.parentId){
                            result[count].gender = item.Name;
                        }
                    })
                    if(index==subResult.length-1){
                        res.send(result);
                    }
                })
            })
        }).catch(function(err){
            res.send(err);
        });
    }
};

