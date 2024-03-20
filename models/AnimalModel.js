import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';
import chalk from 'chalk';

const AnimalModel = connection_db.define('Animal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  scientificName: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  photographer: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  sound: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
}, {
  tableName: 'animals',
  timestamps: false
});

(async () => {
  try {
    await AnimalModel.sync();
    console.log(chalk.green('Model and database synchronized correctly\n'));
  } catch (error) {
    console.error('Synchronization error:', error);
  }
})();

export default AnimalModel;