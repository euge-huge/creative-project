import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createCalendarDay } from "../../actions/scheduleAction";
import { CalendarRow } from "../components/schedulePage/CalendarRow";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"


export const SchedulePage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    dayOfTheWeek: "",
    timeOfTheDay: "",
    subject: "",
    typeOfLesson: ""
  })

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createNewDay = (e) => {
    e.preventDefault();

    dispatch(createCalendarDay(form));

    setForm({
      dayOfTheWeek: "",
      timeOfTheDay: "",
      subject: "",
      typeOfLesson: ""
    })
  }

  const lessons = useSelector(state => state.schedule.all);

  const firstLessons = lessons.filter(lesson => lesson.timeOfTheDay === "1");

  const secondLessons = lessons.filter(lesson => lesson.timeOfTheDay === "2");

  const thirdLessons = lessons.filter(lesson => lesson.timeOfTheDay === "3");

  const fourthLessons = lessons.filter(lesson => lesson.timeOfTheDay === "4");

  const fifthLessons = lessons.filter(lesson => lesson.timeOfTheDay === "5");

  const sixthLessons = lessons.filter(lesson => lesson.timeOfTheDay === "6");

  return (
    <div className="page">
      <h3 className="text-center">Расписание</h3>
      <div className="card" style={{width: "95%", margin: "0 auto"}}>
        <div className="card-header text-center">Создайте фрагмент расписания</div>
        <div className="card-body">
          <form className="form-inline justify-content-around">
            <div className="w-35 input-group mb-2 mr-sm-2" style={{width: "19%"}}>
              <select className="custom-select" id="dayOfTheWeek" onChange={onChangeHandler} name="dayOfTheWeek" value={form.dayOfTheWeek}>
                <option defaultValue>День недели...</option>
                <option value="mon">Понедельник</option>
                <option value="tue">Вторник</option>
                <option value="wed">Среда</option>
                <option value="thu">Четверг</option>
                <option value="fri">Пятница</option>
                <option value="sat">Суббота</option>
                <option value="sun">Воскресенье</option>
              </select>
            </div>

            <div className="input-group mb-2 mr-sm-2" style={{width: "19%"}}>
              <select className="custom-select" id="timeOfTheDay" onChange={onChangeHandler} name="timeOfTheDay" value={form.timeOfTheDay}>
                <option defaultValue>Время...</option>
                <option value="1">8:30-10:05</option>
                <option value="2">10:25-12:00</option>
                <option value="3">12:40-14:15</option>
                <option value="4">14:35-16:10</option>
                <option value="5">16:30-18:05</option>
                <option value="6">18:25-20:00</option>
              </select>
            </div>

            <div className="input-group mb-2 mr-sm-2" style={{width: "19%"}}>
              <select className="custom-select" id="typeOfLesson" onChange={onChangeHandler} name="typeOfLesson" value={form.typeOfLesson}>
                <option defaultValue>Тип...</option>
                <option value="lk" style={{backgroundColor: "#C5CBE3", color: "#333"}}>Лекция</option>
                <option value="pr" style={{backgroundColor: "#CDAAFF", color: "#333"}}>Практика</option>
                <option value="lb" style={{backgroundColor: "#DAF7A6", color: "#333"}}>Лабораторная работа</option>
                <option value="other" style={{backgroundColor: "#FF937C", color: "#333"}}>Другое</option>
              </select>
            </div>

            <div className="input-group mb-2 mr-sm-2" style={{width: "23%"}}>
              <input className="form-control" type="text" placeholder="Предмет" id="subject" onChange={onChangeHandler} name="subject" value={form.subject} />
            </div>

            <button type="submit" className="btn btn-success mb-2" onClick={createNewDay}>Создать</button>
          </form>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <header>
          <div className="row d-none d-sm-flex p-1 bg-success text-white">
            <h5 className="col-sm p-1 text-center">Понедельник</h5>
            <h5 className="col-sm p-1 text-center">Вторник</h5>
            <h5 className="col-sm p-1 text-center">Среда</h5>
            <h5 className="col-sm p-1 text-center">Четверг</h5>
            <h5 className="col-sm p-1 text-center">Пятница</h5>
            <h5 className="col-sm p-1 text-center">Суббота</h5>
            <h5 className="col-sm p-1 text-center">Воскресенье</h5>
          </div>
        </header>
        <div className="row border border-right-0 border-bottom-0">
          {/* Первая пара */}
          <CalendarRow type="1" lessons={firstLessons}/>
          <div className="w-100"></div>

          {/* Вторая пара */}
          <CalendarRow type="2" lessons={secondLessons} />
          <div className="w-100"></div>

          {/* Третья пара */}
          <CalendarRow type="3" lessons={thirdLessons}/>
          <div className="w-100"></div>

          {/* Четвертая пара */}
          <CalendarRow type="4" lessons={fourthLessons}/>
          <div className="w-100"></div>

          {/* Пятая пара */}
          <CalendarRow type="5" lessons={fifthLessons}/>
          <div className="w-100"></div>

          {/* Шестая пара */}
          <CalendarRow type="6" lessons={sixthLessons}/>
          <div className="w-100"></div>



        </div>
      </div>
    </div>
  );
};
