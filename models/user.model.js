const Sequelize = require("sequelize"); //เรียกใช้งาน Sequelize
const sequelize = require("./../db/db.js"); //เรียกใช้งาน db.js

const User = sequelize.define(
  "user",
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "userId",
    },
    userFullname: {
      type: Sequelize.STRING(100),
      allowNull: false,
      field: "userFullname",
    },
    userEmail: {
      type: Sequelize.STRING(100),
      allowNull: false,
      field: "userEmail",
    },
    userName: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "userName",
    },
    userPassword: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "userPassword",
    },
  },
  {
    sequelize,
    tableName: "user_tb",
    freezeTableName: true,
    timestamps: false, //ปิดใช้งาน timestampในกรณีที่ไม่ต้องการ
  }
);

module.exports = User;
