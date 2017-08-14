module.exports = function(sequelize, DataTypes) {
  
  var Country = sequelize.define('country', {
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING }
  });

  Country.associate = function(models) {
    Country.hasMany(models.state);
  };

  return Country;
};