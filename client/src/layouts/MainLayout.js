import React from "react";
import { AppNavbar } from "./components/AppNavbar";
import Sidebar from "./components/Sidebar";

export default function MainLayout() {
  return (
    <div>
      <AppNavbar />
      <Sidebar />
    </div>
  );
}
