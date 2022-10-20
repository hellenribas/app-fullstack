const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false,
    underscored: true
  });
  User.associate = (models) => {
    User.hasMany(models.Task, { foreignKey: 'userId' })
  }
  return User;
}

module.exports = User;