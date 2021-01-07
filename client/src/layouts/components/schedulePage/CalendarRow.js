import React from "react";
import {CalendarDay} from "./CalendarDay"

export const CalendarRow = (props) => {
    const timeTable = [
        {type: "1", time: "8:<sup>30</sup>-10:<sup>05</sup>"},
        {type: "2", time: "10:<sup>25</sup>-12:<sup>00</sup>"},
        {type: "3", time: "12:<sup>40</sup>-14:<sup>15</sup>"},
        {type: "4", time: "14:<sup>35</sup>-16:<sup>10</sup>"},
        {type: "5", time: "16:<sup>30</sup>-18:<sup>05</sup>"},
        {type: "6", time: "18:<sup>25</sup>-20:<sup>00</sup>"},
    ]

    const lessons = props.lessons;

    const mondayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "mon");
    const tuesdayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "tue");
    const wednesdayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "wed");
    const thursdayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "thu");
    const fridayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "fri");
    const saturdayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "sat");
    const sundayLessons = lessons.filter((lesson) => lesson.dayOfTheWeek === "sun");

    const {time} = timeTable.find((oneOf) => oneOf.type === props.type);

    return (
        <>
        <CalendarDay time={time} lessons={mondayLessons}/>
        <CalendarDay time={time} lessons={tuesdayLessons}/>
        <CalendarDay time={time} lessons={wednesdayLessons}/>
        <CalendarDay time={time} lessons={thursdayLessons}/>
        <CalendarDay time={time} lessons={fridayLessons}/>
        <CalendarDay time={time} lessons={saturdayLessons}/>
        <CalendarDay time={time} lessons={sundayLessons}/>
        </>
    );
}