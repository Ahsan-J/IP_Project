/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addPro : function(req,res){
        Products.create({
            prodID:1,
            category : 'Men',
            culture : 'Eastern',
            proType : 'Kurta',
            description : 'Some text defining the product',
            price : 1000,
            size : ['medium','small','large'],
            color : ['black','blue'],
            image : ['url1','url2'],
        }).then(function (result){
            res.send(result);
        })
    }
};

