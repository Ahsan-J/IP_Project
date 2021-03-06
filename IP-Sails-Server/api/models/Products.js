/**
 * Products.js
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
    id:{
      type:'integer',
      primaryKey : true,
      autoIncrement:true,
      notNull:true,
    },
    description :{
      type:'longtext',
      notNull:true,
      required:true,
    },
    brandName : {
      type:'string',
      notNull:true,
      defaultsTo:'unknown'
    },
    price : {
      type:'integer',
      notNull:true,
      required: true
    },
    qualityClass :{
      type:'string',
      notNull:true,
      defaultsTo:'not defined'
    },
  }
};

