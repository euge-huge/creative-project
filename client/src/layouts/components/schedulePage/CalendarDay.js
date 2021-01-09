import React from "react";
import { useDispatch } from "react-redux";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { deleteCalendarDay } from "../../../actions/scheduleAction";

export const CalendarDay = (props) => {
    const dispatch = useDispatch();

    const lessons = props.lessons;

    const deleteFragment = (id) => {
        dispatch(deleteCalendarDay(id));
    }

    return (
        <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
            <h5 className="row align-items-center">
                <span className="date col-1" style={{fontSize: "13px"}} dangerouslySetInnerHTML={{__html: props.time}}></span>
                <small className="col d-sm-none text-center text-muted">Monday</small>
                <span className="col-1"></span>
            </h5>
            {lessons.length ? lessons.map((lesson, idx) => (
                <p  key={idx} className="d-flex justify-content-between text-wrap text-center p-1 m-1" style={lesson.typeOfLesson === "lk" ? {backgroundColor: "#C5CBE3", color: "#333"} : lesson.typeOfLesson === "pr" ? {backgroundColor: "#CDAAFF", color: "#333"} : lesson.typeOfLesson === "lb" ? {backgroundColor: "#DAF7A6", color: "#333"} : {backgroundColor: "#FF937C", color: "#333"}  }>
                    { lesson.subject }
                    <span onClick={() => deleteFragment(lesson._id)} style={{cursor: "pointer", fontSize: "13px"}} ><i className="bi bi-x-circle-fill"></i></span>
                </p>
            )) : (
                <p className="text-center">---</p>
            )}
        </div>
    );
}