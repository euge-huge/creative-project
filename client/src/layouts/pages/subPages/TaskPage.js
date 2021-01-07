import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {deleteTask} from "../../../actions/tasksAction"


export const TaskPage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const tasks = useSelector(state => state.tasks.all);
    const task = tasks.find((task) => task._id === id);
    return (
        <div className="page" style={{display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "90vh"
        }}>
      <div className="card text-center" style={task.importance>=70 ? {backgroundColor: "#FF9078", margin: "0 auto", padding: "25px 25px", width: "60%"} : (task.importance>=40 && task.importance<70) ? {backgroundColor: "#FFDE71", margin: "0 auto", padding: "25px 25px", width: "60%"} : {backgroundColor: "#AED170", margin: "0 auto", padding: "25px 25px", width: "60%"}} >
            <div className="card-body">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-info" onClick={() => history.push("/edit/" + task._id)}>Редактировать</button>
                    <button type="button" className="btn btn-danger" onClick={() => {dispatch(deleteTask(task._id)); history.push("/")}}>Удалить</button>
                </div>
            </div>
        </div>
        </div>
    );
};
