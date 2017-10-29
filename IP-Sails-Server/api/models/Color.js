/**
 * Color.js
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
      type : 'integer',
      primaryKey:true,
      autoIncrement:true,
      notNull:true,
    },
    colorCode : {
      required:true,
      type:'string',
      notNull : true,
    }
  }
};
