import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {deleteUser, updateUserInfo} from "../../actions/authAction"


export const EditProfilePage = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        branch: user.branch,
        degree: user.degree,
        number: user.number
    });

    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

    const updateUserInfoHandler = (e) => {
        e.preventDefault();

        if (form.firstName && form.lastName && form.email) {
          dispatch(updateUserInfo(user._id, form));
          history.push("/profile")
        }

    }

    const deleteUserHandler = () => {
      if (user.id) {
        dispatch(deleteUser(user.id))
      } else if (user._id) {
        dispatch(deleteUser(user._id))
      }
      
    }

  return (
    <div className="page">
      <h3 className='text-center'>Редактировать профиль</h3>
      <div className="content" style={{width: "75%", margin: "0 auto"}}>
      <form onSubmit={updateUserInfoHandler}>
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
            <input
              type="text"
              className="form-control"
              placeholder="Введите номер тел."
              name="number"
              value={form.number}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <select
              class="custom-select"
              name="branch"
              onChange={onChangeHandler}
              value={form.branch}
            >
              <option selected>Выберите школу</option>
              <option value="ISPR">ИШПР</option>
              <option value="ISE">ИШЭ</option>
              <option value="IYTS">ИЯТШ</option>
              <option value="ISNKB">ИШНКБ</option>
              <option value="ISITR">ИШИТР</option>
              <option value="ISNPT">ИШНПТ</option>
              <option value="SIP">ШИП</option>
              <option value="ISHBMT">ИШХБМТ</option>
              <option value="SBIP">ШБИП</option>
              <option value="ISFVP">ИШФВП</option>
            </select>
          </div>
          <div className="form-group">
            <select
              class="custom-select"
              name="degree"
              onChange={onChangeHandler}
              value={form.degree}
            >
              <option selected>Выберите получаемую степень</option>
              <option value="bachelor">Бакалавр</option>
              <option value="master">Магистр</option>
              <option value="specialist">Специалист</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Сохранить
          </button>
        </form>
        <button type="button" className="btn btn-danger btn-block mt-2" onClick={deleteUserHandler}>
            Удалить аккаунт
          </button>
      </div>
    </div>
  );
};
