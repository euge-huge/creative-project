import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authAction";

export const AppNavbar = () => {
  const dispatch = useDispatch();

  const exitHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-success flex-md-nowrap p-0 shadow">
        <div className="navbar-brand mr-0 px-3">
          Teach'ерская<sup style={{ fontSize: "11px" }}>©</sup>
        </div>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item text-nowrap">
            <button className="logout-btn" onClick={exitHandler}>
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
