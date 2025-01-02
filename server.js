const express = require("express"); //เรียกใช้งาน express
const userRoute = require("./routes/user.route.js");
const myfriendRoute = require("./routes/myfriend.route.js");
const cors = require("cors");
const bodyParser = require("body-parser");
//call .env
require("dotenv").config();

const app = express(); //สร้าง WEB SERVER

//สร้างตัวแปรเก็บ Port Number
const PORT = process.env.PORT || 5050;

//เพิ่มส่วนของ middleware ในการใช้งาน เส้นทาง
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/myfriend", myfriendRoute);

//ทดสอบการเชื่อม
//เวลาทดสอบ ให้ใช้ localhost:3000 หรือ http://127.0.0.1:3000
app.get("/", (req, res) => {
  //req = request , res = response
  res.send("Hello World");
});
//------------------------------

//เรียกใช้งาน router
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT + "....");
});
