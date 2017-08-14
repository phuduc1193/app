module.exports = function(sequelize, DataTypes) {
  var State = sequelize.define('state', {
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING }
  });

  State.associate = function(models) {
    State.belongsTo(models.country, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  }

  return State;
};