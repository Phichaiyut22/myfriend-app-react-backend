const Sequelize = require("sequelize"); // เรียกใช้งาน Sequelize
const sequelize = require("./../db/db.js"); // เรียกใช้งาน db.js

const Myfriend = sequelize.define(
  "myfriend",
  {
    myfriendId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true, // กำหนดให้ myfriendId เป็น PRIMARY KEY
      field: "myfriendId",
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,

      field: "userId",
    },
    myfriendFullname: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "myfriendFullname",
    },
    myfriendPhone: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "myfriendPhone",
    },
    myfriendAge: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "myfriendAge",
    },
    myfriendMajor: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "myfriendMajor",
    },
  },
  {
    sequelize,
    tableName: "myfriend_tb",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Myfriend;
