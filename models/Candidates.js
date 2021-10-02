import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";
import People from "./People";


class Candidates extends Model {

}

Candidates.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  votes: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    get() {
      return undefined;
    }
  }
}, {
  sequelize,
  modelName: 'Candidates',
  tableName: 'candidates'
});

People.hasOne(Candidates, {
  foreignKey: 'peopleId',
  as: 'candidate',
});

Candidates.belongsTo(People, {
  foreignKey: 'peopleId',
  as: 'person'
});

export default Candidates;
