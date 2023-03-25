'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
      home_team_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'teams',
         key: 'id',
       }
     },
      home_team_goals: {
       type: Sequelize.INTEGER,
       allowNull: false,
     },
      away_team_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'teams',
         key: 'id',
        }
    },
      away_team_goals: {
       type: Sequelize.INTEGER,
       allowNull: false,
      },
      in_progress: {
       type: Sequelize.BOOLEAN,
       allowNull: false,
      }
   });
 },
 // id
//  homeTeamId: {
//   type: INTEGER,
//   // primaryKey: true,
//   allowNull: false,
// },
// homeTeamGoals: {
//   type: INTEGER,
//   allowNull: false,
// },
// awayTeamId: {
//   type: INTEGER,
//   // primaryKey: true,
//   allowNull: false,
// },
// awayTeamGoals: {
//   type: INTEGER,
//   allowNull: false,
// },
// inProgress: {
//   type: BOOLEAN,
//   allowNull: false,
// },

 down: async (queryInterface, _) => {
   await queryInterface.dropTable('matches');
 }
};
