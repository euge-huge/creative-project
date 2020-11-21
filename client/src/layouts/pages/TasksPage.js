import React, { useState } from "react";
import AddNewTaskModal from "../components/AddNewTaskModal";

export const TasksPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="page">
      <h1 className="text-center">Страница задач</h1>
    </div>
  );
};
