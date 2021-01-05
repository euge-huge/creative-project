import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import 'react-widgets/dist/css/react-widgets.css';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { updateTask } from "../../../actions/tasksAction";


export const EditTaskPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tasks = useSelector(state => state.tasks.all);
    const {id} = useParams();
    const currentTask = tasks.find((task) => task._id === id);

    const [form, setForm] = useState({
        title: currentTask.title,
        description: currentTask.description,
        importance: currentTask.importance,
    });

    const [expiredAtTime, setExpiredAtTime] = useState(new Date(Date.parse(currentTask.expiredAt)));

    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const updateTaskHandler = (e) => {
          e.preventDefault();
          const newTask = {
              ...currentTask,
              ...form,
              expiredAt: expiredAtTime,
          }
        dispatch(updateTask(newTask));
        history.push("/tasks")
      }


    return (
        <div className="page">
        <h3 className="text-center">Редактирование задачи</h3>

        <div className={form.importance>=70 ? "card text-center bg-danger text-white" : (form.importance>=40 && form.importance<70) ? "card text-center bg-warning" : "card text-center bg-success "}  style={{margin: "0 70px"}}>
            <div className="card-header">
            Отредактируйте задачу
            </div>
            <div className="card-body">
            <form onSubmit={updateTaskHandler}>
                <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >Заголовок</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3" name="title" value={form.title} onChange={onChangeHandler}/>
                </div>
                </div>
                <div className="row mb-3">
                <label htmlFor="floatingTextarea" className="col-sm-2 col-form-label" >Описание</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" id="inputEmail3" name="description" value={form.description} onChange={onChangeHandler}/>
                </div>        
                </div>
                <div className="row mb-3">
                <label htmlFor="floatingTextarea" className="col-sm-2 col-form-label" >Выполнить до</label>
                <div className="col-sm-10">
                    <DateTimePicker
                    culture="ru-RU"
                    value={expiredAtTime}
                    onChange={(value) => setExpiredAtTime(value)}
                    />              
                </div>        
                </div>

                <div className="row mb-3 form-group">
                <label htmlFor="formControlRange" className="col-sm-2 col-form-label" >Срочность задачи</label>
                <div className="col-sm-10">
                    <input type="range" className="form-control-range " id="formControlRange" name="importance" onChange={onChangeHandler} value={form.importance}/>          
                </div>        
                </div>
                
                <button type="submit" className="btn btn-primary" >Сохранить</button>
            </form>
            </div>
        </div>
        </div>
    );
};
