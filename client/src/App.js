import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./actions/authAction";
import MainLayout from "./layouts/MainLayout";
import { RotesPage } from "./routes";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;
  const isLoading = auth.isLoading;

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {isLoading ? (
        <div className="app-spinner">
          <div
            className="spinner-border text-success"
            role="status"
            style={{ width: "100%", height: "100%" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {isAuthenticated && <MainLayout />}
          <RotesPage isAuthenticated={isAuthenticated} />
        </>
      )}
    </Router>
  );
};

export default App;
