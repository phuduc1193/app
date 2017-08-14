module.exports = function(sequelize, DataTypes) {
  
  var Gender = sequelize.define('gender', {
    name: { type: DataTypes.STRING }
  });

  return Gender;
};