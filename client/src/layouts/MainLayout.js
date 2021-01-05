import React from "react";
import { AppNavbar } from "./components/mainLayout/AppNavbar";
import Sidebar from "./components/mainLayout/Sidebar";

export default function MainLayout() {
  return (
    <div>
      <AppNavbar />
      <Sidebar />
    </div>
  );
}
