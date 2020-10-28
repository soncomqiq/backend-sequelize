module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Person", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    tableName: "persons",
    timestamps: false,
  });

  model.associate = (models) => {
    model.hasMany(models.Todo, { foreignKey: "person_id" });
  };

  return model;
}