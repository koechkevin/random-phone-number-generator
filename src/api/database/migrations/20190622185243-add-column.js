

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Numbers',
    'recently_generated', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Number', 'recently_generated'),
};
