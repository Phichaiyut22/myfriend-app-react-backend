const Squelize = require("sequelize");

require("dotenv").config(); // เรียกใช้งาน dotenv

//สร้าง instance ของ Sequelize  เพื่อทำงานกับฐานข้อมูล
const sequelize = new Squelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

//ทำการเชื่อมต่อ โดยจะทำงานกับไฟล์ models

sequelize
  .sync()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
