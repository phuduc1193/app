module.exports = function(sequelize, DataTypes) {
  
  var RelationshipStatus = sequelize.define('relationshipStatus', {
    name: { type: DataTypes.STRING },
    preposition: { type: DataTypes.STRING },
    mark: { type: DataTypes.STRING }
  });

  return RelationshipStatus;
};