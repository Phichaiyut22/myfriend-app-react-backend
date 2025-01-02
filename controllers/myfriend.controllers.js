const Myfriend = require("./../models/myfriend.model.js");

// ฟังก์ชันสำหรับสร้างข้อมูลเพื่อน
const createMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.create(req.body); // แก้จาก User เป็น Myfriend
    res
      .status(201)
      .json({ message: "Myfriend created successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create Myfriend: " + error });
  }
};

// ฟังก์ชันสำหรับอัปเดตข้อมูลเพื่อน
const updateMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.update(req.body, {
      // แก้จาก User เป็น Myfriend
      where: {
        myfriendId: req.params.myfriendId,
      },
    });
    res
      .status(200)
      .json({ message: "Myfriend updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update Myfriend: " + error });
  }
};

// ฟังก์ชันสำหรับลบข้อมูลเพื่อน
const deleteMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.destroy({
      where: {
        myfriendId: req.params.myfriendId,
      },
    });
    res
      .status(200)
      .json({ message: "Myfriend deleted successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Myfriend: " + error });
  }
};

// ฟังก์ชันสำหรับดึงข้อมูลเพื่อนทั้งหมดตาม userId
const getAllMyfriendByUserId = async (req, res) => {
  try {
    const result = await Myfriend.findAll({
      where: {
        userId: req.params.userId,
      },
    });

    if (!result || result.length === 0) {
      res.status(404).json({ message: "No Myfriends found" });
    } else {
      res.status(200).json({ message: "Myfriends found", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve Myfriends: " + error });
  }
};
const getMyfriendById = async (req, res) => {
  try {
    const result = await Myfriend.findOne({
      where: { myfriendId: req.params.myfriendId },
    });
    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!result) {
      res.status(404).json({ message: "Myfriend not found" });
    } else {
      res.status(200).json({ message: "Myfriend found", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get myfriend" + error });
  }
};

module.exports = {
  createMyfriend,
  updateMyfriend,
  deleteMyfriend,
  getAllMyfriendByUserId,
  getMyfriendById,
};
