const User = require("./../models/user.model.js");

// ฟังก์ชันสำหรับสร้างข้อมูลผู้ใช้
const createUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user: " + error });
  }
};

// ฟังก์ชันสำหรับตรวจสอบการเข้าใช้งาน
const CheckLoginUser = async (req, res) => {
  try {
    const { userName, userPassword } = req.params; // รับค่า params
    const result = await User.findOne({
      where: {
        userName: req.params.userName, // แก้เป็น userName ตามเงื่อนไข API
        userPassword: req.params.userPassword,
      },
    });

    if (!result) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "Login successful", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to check login: " + error });
  }
};

// ฟังก์ชันสำหรับอัปเดตข้อมูลผู้ใช้
const updateUser = async (req, res) => {
  try {
    const result = await User.update(req.body, {
      where: {
        userId: req.params.userId,
      },
    });
    res
      .status(200)
      .json({ message: "User updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user: " + error });
  }
};

// ฟังก์ชันสำหรับลบข้อมูลผู้ใช้
const deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({
      where: {
        userId: req.params.userId,
      },
    });
    res
      .status(200)
      .json({ message: "User deleted successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user: " + error });
  }
};

module.exports = {
  createUser,
  CheckLoginUser,
  updateUser,
  deleteUser,
};
