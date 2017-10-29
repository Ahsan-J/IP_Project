/**
 * ColorController
 *
 * @description :: Server-side logic for managing colors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add : function(req,res){
        console.log(req)
        res.send({
            status:'ok'
        });
    }
};

