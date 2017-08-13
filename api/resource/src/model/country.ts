module.exports = function(sequelize, DataTypes) {
  
  var Country = sequelize.define("Country", {
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING }
  });

  Country.associate = function(models) {
    Country.hasMany(models.State);
  };

  return Country;
};