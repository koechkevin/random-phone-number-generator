
module.exports = (sequelize, DataTypes) => {
  const Number = sequelize.define('Number', {
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    recently_generated: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Number.associate = function (models) {
    // associations can be defined here
  };
  return Number;
};
