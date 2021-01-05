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
        <div className={task.importance>=70 ? "card text-center bg-danger text-white" : (task.importance>=40 && task.importance<70) ? "card text-center bg-warning" : "card text-center bg-success "} style={{width: "70%", margin: "auto auto", padding: "20px 20px"}} >
            <div className="card-body">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={() => history.push("/edit/" + task._id)}>Редактировать</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {dispatch(deleteTask(task._id)); history.push("/")}}>Удалить</button>
                </div>
            </div>
        </div>
        </div>
    );
};
