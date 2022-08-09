import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-28"
    >
      <h1 className="text-2xl text-center mb-10">Вход на сайт</h1>
      <label className="text-xs text-gray-400">
        Имя пользователя:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Почта или телефон"
          className="mt-1 text-black w-full rounded-lg bg-gray-200 border py-3 px-3 text-xs outline-none placeholder:text-gray-700 mb-4"
        />
      </label>
      <label className="text-xs text-gray-400">
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className="mt-1 text-black w-full rounded-lg bg-gray-200 border py-3 px-3 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-10">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-xs text-white bg-cyan-500 rounded-lg py-3 px-8 hover:bg-cyan-600"
        >
          Войти
        </button>
        <Link
          to="/register"
          className="flex justify-center items-center text-xs"
        >
          Нет аккаунта?
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
