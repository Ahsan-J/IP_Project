/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    prodID:{
      type:'integer',
      unique:true,
      notNull:true,
    },
    category :{
      type:'string',
      notNull:true,
      // collection:'category',
      // via:'id'
    },
    culture :{
      type:'string',
      notNull:true,
    },
    proType: {
      type:'string',
      notNull:true,
    },
    description :{
      type:'text',
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
    size:{
      type:'array',
      notNull:true,
    },
    color : {
      type:'array',
      notNull:true,
      required:true
    },
    qualityClass :{
      type:'string',
      notNull:true,
      defaultsTo:'not defined'
    },
    image : {
      notNull:true,
      type: 'array',
    }
  }
};

