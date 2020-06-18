module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define('Comment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING,
      required: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      required: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      required: true,
    }
  }, {});
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Comment;
};