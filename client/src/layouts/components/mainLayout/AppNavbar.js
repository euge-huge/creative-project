import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/authAction";
import { Navbar, Button, Nav } from "react-bootstrap";

export const AppNavbar = () => {
  const dispatch = useDispatch();

  const exitHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <>
        <Navbar bg="success" fixed={"top"} variant="dark">
          <Navbar.Brand> Student'ская<sup style={{ fontSize: "11px" }}>©</sup> </Navbar.Brand>
          <Nav className="ml-auto">
            <Button className="logout-btn" onClick={exitHandler}>Выйти</Button>
          </Nav>
        </Navbar>
      </>
    </div>
  );
};
