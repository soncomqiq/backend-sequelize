module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Person", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: "persons",
    timestamps: false,
  });

  model.associate = (models) => {
    model.hasMany(models.Todo, { foreignKey: "person_id" });
  };

  return model;
}