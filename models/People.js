import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";

class People extends Model {

}

People.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  fName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  mName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passport: {
    type: DataTypes.CHAR(12),
    allowNull: false,
  },
  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  voted: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  }
}, {
  sequelize,
  modelName: 'People',
  tableName: 'people',

})

People.addHook('beforeSave', (user, options) => {
  user.voted = new Date();
  console.log(user, options)
})


People.addHook('beforeSave', (product, options) => {
  if (product.userId) {
    throw Error("user Id required");
  }
})

export default People;



