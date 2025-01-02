const userCtrl = require("./../controllers/user.controllers.js");
const express = require("express");

const router = express.Router();

// กำหนดเส้นทาง API เพื่อทำงานกับตาราง user_tb
router.post("/", userCtrl.createUser); // POST - สร้างผู้ใช้
router.get("/:userName/:userPassword", userCtrl.CheckLoginUser); // GET - ตรวจสอบผู้ใช้
router.put("/:userId", userCtrl.updateUser); // PUT - อัปเดตผู้ใช้
router.delete("/:userId", userCtrl.deleteUser); // DELETE - ลบผู้ใช้

module.exports = router;
