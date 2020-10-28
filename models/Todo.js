module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Todo", {
    task: DataTypes.STRING(255)
  }, {
    tableName: "todos",
    timestamps: false,
  });

  return model;
}