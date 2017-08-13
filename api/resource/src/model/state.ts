module.exports = function(sequelize, DataTypes) {
  var State = sequelize.define("State", {
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING }
  });

  State.associate = function(models) {
    State.belongsTo(models.Country, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }

  return State;
};