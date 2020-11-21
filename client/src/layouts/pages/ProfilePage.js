import React from "react";
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
                src="https://snob.ru/i/indoc/6c/rubric_issue_event_986635.jpg"
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
                {user.degree === "doctor" ? (
                  <>Доктор наук</>
                ) : (
                  <>Кандитат наук</>
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
                  >
                    Информация
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-success"
                    id="profile-tab"
                    data-toggle="tab"
                    href="/profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Предметы
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-success"
                    id="profile-tab"
                    data-toggle="tab"
                    href="/profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Дополнительно
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Ред."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Ссылки</p>
              <a href="/href">Личная страница</a>
              <br />
              <a href="/href">ВКонтакте</a>
              <br />
              <a href="/href">Электорнная почта</a>
              <p>Ученые степени</p>
              <a href="/href">Кандитат физико математических наук 2015г.</a>
              <br />
              <a href="/href">Профессор 2020г.</a>
              <br />
            </div>
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
                      <p>user.number</p>
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
                    <p>Информационных технологий</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
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
