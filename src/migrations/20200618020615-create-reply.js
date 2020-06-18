module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Replies', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      unique: true,
    },
    userId: {
      type: Sequelize.UUID,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
    commentId: {
      type: Sequelize.UUID,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Comments',
        key: 'id',
        as: 'commentId',
      },
    },
    reply: {
      type: Sequelize.STRING,
      required: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Replies'),
};