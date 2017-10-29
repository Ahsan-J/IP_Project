/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema:true,
  autoPK: false,
  autoCreatedAt:false,
  autoUpdatedAt: false,
  
  attributes: {
    uuid:{
      type:'string',
      primaryKey:true,
      required:true,
    },
    name:{
      type:'string',
      notNull:true,
      required:true,
    },
    email:{
      type:'string',
      unique:true,
    },
    password:{
      type:'string',
      required:true,
      notNull:true,
    },
    contact:{
      type:'string',
      notNull:true,
      required:true,
    },
    nic:{
      type:'string',
      required:true,
      notNull:true,
    },
    address:{
      type:'longtext',
      notNull:true,
      required:true,
    },
    imageUrl:{
      type:'string'
    },
  }
};

