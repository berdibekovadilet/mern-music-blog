import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-28"
    >
      <h1 className="text-2xl text-center mb-10">Регистрация</h1>
      <label className="text-xs text-gray-400">
        Имя пользователя:
        <input
          type="text"
          placeholder="Почта или телефон"
          className="mt-1 text-black w-full rounded-lg bg-gray-200 border py-3 px-3 text-xs outline-none placeholder:text-gray-700 mb-4"
        />
      </label>
      <label className="text-xs text-gray-400">
        Пароль:
        <input
          type="password"
          placeholder="Пароль"
          className="mt-1 text-black w-full rounded-lg bg-gray-200 border py-3 px-3 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-10">
        <button
          type="submit"
          className="flex justify-center items-center text-xs text-white bg-cyan-500 rounded-lg py-3 px-6 hover:bg-cyan-600"
        >
          Подтвердить
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-xs"
        >
         Уже зарегистрированы?
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
