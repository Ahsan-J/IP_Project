/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add : function(req,res){
        Products.create({
            description : req.body.description,
            brandName: req.body.brandName,
            price:req.body.price,
            qualityClass:req.body.qualityClass,
        }).then(function (result){
            res.send(result);
        }).catch(function(result){
            res.send(result);
        })
        console.log("Triggered");
    }
};

