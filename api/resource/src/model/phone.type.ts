module.exports = function(sequelize, DataTypes) {
  
  var PhoneType = sequelize.define('phoneType', {
    name: { type: DataTypes.STRING }
  });

  return PhoneType;
};