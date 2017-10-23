var uuidv1 = require('uuid/v1');
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addUser : function(req,res){
        User.create({
              uuid:uuidv1(),
              name:req.query.name,
              email:req.query.email,
              password:req.query.password,
              contact:req.query.contact,
              nic:req.query.nic,
              address:req.query.address,
              imageUrl:req.query.imageUrl
        }).then(function (result){
            res.send(result);
        })
    }
};

