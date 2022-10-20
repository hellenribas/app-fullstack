const Tasks = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Task', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tarefa: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Tasks',
    timestamps: false,
  });
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.User, { foreignKey: 'userId' })
  }
  return Tasks;
}

module.exports = Tasks;