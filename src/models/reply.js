module.exports = (Sequelize, DataTypes) => {
  const Reply = Sequelize.define('Reply', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
    commentId: {
      type: DataTypes.UUID,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Comments',
        key: 'id',
        as: 'commentId',
      },
    },
    reply: {
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
  Reply.associate = (models) => {
    Reply.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    Reply.belongsTo(models.Comment, {
      foreignKey: 'commentId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Reply;
};