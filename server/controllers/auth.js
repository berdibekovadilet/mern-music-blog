import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Register user
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUser = await User.findOne({ username });

    if (isUser) {
      return res.json({
        message: "Данное имя уже занято, попробуйте другое",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: "Регистрация прошла успешно.",
    });
  } catch (error) {
    res.json({ message: "Ошибка при созданий пользователя" });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.json({
        message: "Такой пользователь не существует",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({ message: "Неверный пароль" });
    }

    

  } catch (error) {
    res.json({ message: "Ошибка при авторизаций." });
  }
};

// Get Me
export const getMe = async (req, res) => {
  try {
  } catch (error) {}
};
