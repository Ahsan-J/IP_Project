/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    uuid:{
      type:'string',
      unique:true,
      notNull:true,
      required:true,
    },
    name:{
      type:'string',
      notNull:true,
      required:true,
    },
    email:{
      type:'string',
      email:true,
      unique:true,
      notNull:true,
      required:true
    },
    password:{
      type:'string',
      password:true,
      required:true
    },
    contact:{
      type:'string',
      notNull:true,
    },
    nic:{
      type:'string',
      required:true,
      notNull:true,
    },
    address:{
      type:'text',
      notNull:true,
    },
    imageUrl:{
      type:'string'
    },
  }
};

