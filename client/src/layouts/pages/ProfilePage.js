import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

export const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="page emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://static10.tgstat.ru/channels/_0/8a/8a75bb2c415b49459a0b01fecf8fe64d.jpg"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Сменить фото
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>
                {user.lastName} {user.firstName}
              </h5>
              <h6 className="text-success">
                {user.degree === "bachelor" ? (
                  <>Бакалавр</>
                ) : user.degree === "master" ? (
                  <>Магистр</>
                ) : user.degree === "specialist" ? (
                  <>Специалист</>
                ) : (
                  <>Не указано</>
                )}
              </h6>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="/home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    Информация
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/profile/edit">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Ред."
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row"></div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Имя</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {user.lastName} {user.firstName}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Номер телефона</label>
                  </div>
                  <div className="col-md-6">
                    {user.number !== null ? (
                      <p>{user.number}</p>
                    ) : (
                      <p className="text-secondary">не заполнено</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Кафедра</label>
                  </div>
                  <div className="col-md-6">
                    <p>{
                    user.branch === "ISPR" ? "Инженерная школа природных ресурсов" :
                    user.branch === "ISE" ? "Инженерная школа энергетики" :
                    user.branch === "IYTS" ? "Инженерная школа ядерных технологий" :
                    user.branch === "ISNKB" ? "Инженерная школа неразрушающего контроля и безопасности" :
                    user.branch === "ISITR" ? "Инженерная школа информационных технологий и робототехники" :
                    user.branch === "ISNPT" ? "Инженерная школа новых производственных технологий" :
                    user.branch === "SIP" ? "Школа инженерного предпринимательства" :
                    user.branch === "ISHBMT" ? "Исследовательская школа химических и биомедицинских технологий" :
                    user.branch === "SBIP" ? "Школа базовой инженерной подготовки" :
                    user.branch === "ISFVP" ? "Исследовательская школа физики высокоэнергетических процессов" 
                    
                    : "----"
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
