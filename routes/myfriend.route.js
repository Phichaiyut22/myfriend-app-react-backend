const myfriendCtrl = require("./../controllers/myfriend.controllers.js");
const express = require("express");

const router = express.Router();

// กำหนดเส้นทาง API เพื่อทำงานกับตาราง Myfriend_tb
router.post("/", myfriendCtrl.createMyfriend); // POST - สร้างผู้ใช้
router.get("/:userId", myfriendCtrl.getAllMyfriendByUserId);
router.get("/myfriendId/:myfriendId", myfriendCtrl.getMyfriendById); // GET - ตรวจสอบผู้ใช้
router.put("/:myfriendId", myfriendCtrl.updateMyfriend); // PUT - อัปเดตผู้ใช้
router.delete("/:myfriendId", myfriendCtrl.deleteMyfriend); // DELETE - ลบผู้ใช้

module.exports = router;
