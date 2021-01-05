import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../actions/tasksAction";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"


export const Task = (props) => {
    const dispatch = useDispatch();

    const task = props.task;
    
    const deleteTaskHandler = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <tr key={task._id} className={task.importance >=70 ? "table-danger" : (task.importance>=40 && task.importance<70) ? "table-warning" : "table-success"} >
            <td style={{verticalAlign: "middle"}}>{props.idx+1}</td>
            <td style={{verticalAlign: "middle"}}>{task.title}</td>
            <td style={{verticalAlign: "middle"}}>{task.description}</td>
            <td style={{verticalAlign: "middle"}}>{new Date(task.expiredAt).toLocaleString("ru-RU")}</td>
            <td style={{verticalAlign: "middle"}}>
                <Link to={"/edit/" + task._id} className="text-body mr-2" style={{ fontSize: "18px"}}><i className="bi bi-gear-fill"></i></Link>
                <span onClick={() => deleteTaskHandler(task._id)} style={{cursor: "pointer", fontSize: "18px"}}><i className="bi bi-x-circle-fill"></i></span>
            </td>
        </tr>
    );
}