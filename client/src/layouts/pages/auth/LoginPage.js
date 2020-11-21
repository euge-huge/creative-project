import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../actions/authAction";
import { clearError } from "../../../actions/errorAction";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const error = useSelector((state) => state.error);

  useEffect(() => {
    setMsg((prev) => {
      if (error.msg !== prev) {
        if (error.id === "LOGIN_FAIL" || error.id === "LOGOUT_SUCCESS") {
          return error.msg;
        } else {
          return null;
        }
      } else {
        return prev;
      }
    });
  }, [error]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    dispatch(clearError());
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };

  return (
    <div className="auth-page">
      <div className="auth-page-block card">
        {msg ? (
          <div className="alert alert-danger text-center" role="alert">
            {msg}
          </div>
        ) : null}
        <h5
          className="card-title text-center"
          style={{ fontSize: "30px", fontWeight: "lighter" }}
        >
          Вход
        </h5>

        <form onSubmit={loginSubmitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="auth-span">
            Первый раз здесь? <Link to="/register">Зарегистрироваться.</Link>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
