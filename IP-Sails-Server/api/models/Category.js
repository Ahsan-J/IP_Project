/**
 * Category.js
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
    Name : {
      type : 'string',
      notNull:true,
    },
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true,
      notNull:true,
    },
    parentId:{
      type:'integer',
    },
  }
};

