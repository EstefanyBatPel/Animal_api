import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

// Definir el modelo Animal
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
    type: DataTypes.STRING(100),
    allowNull: false
  },
  photographer: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  sound: {
    type: DataTypes.STRING(100)
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  // Opciones adicionales del modelo
  tableName: 'animals', // Nombre de la tabla en la base de datos
  timestamps: false // Deshabilitar los campos createdAt y updatedAt
});

// Sincronizar el modelo con la base de datos
(async () => {
  try {
    await AnimalModel.sync(); 
    //await animal.sync({force: true}); // Elimina el modelo anterior y crea uno nuevo
    console.log('Model and database synchronized correctly');
  } catch (error) {
    console.error('Synchronization error:', error);
  }
})();

console.log(AnimalModel === connection_db.models.Animal); // true

export default AnimalModel;