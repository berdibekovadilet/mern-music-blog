import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const activeStyles = {
    color: "black",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-32 h-8 text-sm text-white rounded-md bg-black font-bold hover:bg-gray-700">
        <NavLink to="/">MUSIC FLOW</NavLink>
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className="text-sx text-gray-500 hover:text-cyan-600 transition-all"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className="text-sx text-gray-500 hover:text-cyan-600 transition-all"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="text-sx text-gray-500 hover:text-cyan-600 transition-all"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center px-6 py-2 text-sm text-white rounded-md bg-cyan-500 hover:bg-cyan-600 font-bold transition-all">
        {isAuth ? (
          <button onClick={logoutHandler}>Выйти</button>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
