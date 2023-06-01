'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imoveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Imoveis.belongsTo(models.Enderecos,{
          foreignKey: 'endereco_id'
      })
      Imoveis.belongsTo(models.Clientes,{
        foreignKey: 'proprietario_id'
      })
        Imoveis.belongsTo(models.Fotos_Imoveis,{
        foreignKey: 'fotos_id'
      })
    }
  }
  Imoveis.init({
    descricao: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    tipo: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    valor_minimo: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Imoveis',
  });
  return Imoveis;
};