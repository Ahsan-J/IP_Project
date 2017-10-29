/**
 * Size.js
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
      primaryKey:true,
      notNull:true,
      autoIncrement:true,
    },
    sizeName : {
      type : 'string'
    },
    sizeNumber : {
      type:'integer'
    }
  }
};

