var uuidv4 = require('uuid/v4');
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add : function(req,res){
        User.create({
                uuid:uuidv4(),
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                contact:req.body.contact,
                nic:req.body.nic,
                address:req.body.address,
        }).then(function (result){
            res.send(result);
        }).catch(function(err){
            res.badRequest();
            // res.status(err.status).send({
            //     status:err.status,
            //     error:err.error,
            //     message:err.invalidAttributes.email[0].message
            // })
        });
    },
};

