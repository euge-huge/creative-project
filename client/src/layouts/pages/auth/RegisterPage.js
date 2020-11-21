import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../actions/authAction";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const error = useSelector((state) => state.error);

  useEffect(() => {
    setMsg((prev) => {
      if (error.msg !== prev) {
        if (error.id === "REGISTER_FAIL") {
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
    firstName: "",
    lastName: "",
    email: "",
    branch: "",
    degree: "",
    password: "",
    passwordConfirm: "",
    checked: false,
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onCheckChangeHandler = (e) => {
    setForm({
      ...form,
      checked: !form.checked,
    });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(registerUser(form));
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
          Регистрация
        </h5>
        <form onSubmit={registerSubmitHandler}>
          <div className="form-group input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Имя"
              name="firstName"
              value={form.firstName}
              onChange={onChangeHandler}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Фамилия"
              name="lastName"
              value={form.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Введите Email"
              name="email"
              value={form.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <select
              class="custom-select"
              name="branch"
              onChange={onChangeHandler}
            >
              <option selected>Выбирете отделение</option>
              <option value="OAR">
                Отделение автоматизации и робототехники
              </option>
              <option value="OG">Отделение геологии</option>
              <option value="OEN">Отделение естественных наук</option>
              <option value="OIY">Отделение иностранных языков</option>
              <option value="OIT">Отделение информационных технологий</option>
              <option value="OMI">Отделение математики и информатики</option>
              <option value="OKD">Отделение контроля и диагностики</option>
              <option value="OND">Отделение нефтегазового дела</option>
              <option value="OOD">Отделение общетехнических дисциплин</option>
            </select>
          </div>
          <div className="form-group">
            <select
              class="custom-select"
              name="degree"
              onChange={onChangeHandler}
            >
              <option selected>Выбирете ученую степень</option>
              <option value="candidate">Кандидат наук</option>
              <option value="doctor">Доктор наук</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Придумайте пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-confirm">Подтвердите пароль</label>
            <input
              type="password"
              className="form-control"
              id="password-confirm"
              name="passwordConfirm"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              name="checked"
              value={form["password-confirm"]}
              checked={form.checked}
              onChange={onCheckChangeHandler}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами сообщества
            </label>
          </div>
          <div className="auth-span">
            Уже есть аккаунт? <Link to="/login">Войти.</Link>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
