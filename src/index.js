import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);
ReactDOM.render(<Profile />, document.getElementById("root"));

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

//ReactDOM.render(<Panel />, document.getElementById("root"));
const ElemV = () => (
  <div>
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>
  </div>
);
*/
//ReactDOM.render(<ElemV/>, document.getElementById("root"));
// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date.getDay());

// // Возвращает месяц от 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());
/////////////////////////////////////////////////////////////
const FIRST_DAY_MONTH = 1;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const DayOfWeek = {
  Mondey: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

//узнать сколько дней в месяце
function getDaysInMonth(date) {
  //const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];
  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}
//с какого дня недели начинается месяц
function getDayOfWeek(date /*new Date(year,month)*/) {
  const dayOfWeek = date.getDay();
  //console.log(`getDayOfWeek   ${dayOfWeek}`);
  if (dayOfWeek === 0) return 6;
  return dayOfWeek - 1;
}
//узнать высокосный год или нет( false-невысокосный, true-высокsосный )
function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

//пеолучить данные месяца
function getMonthData(year, month) {
  const rez = [];

  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const startsDayOfMonth = getDayOfWeek(date);
  console.log(daysInMonth);
  console.log(startsDayOfMonth);
  console.log(daysInMonth + startsDayOfMonth);
  let day = FIRST_DAY_MONTH;
  for (let i = 0; i != (daysInMonth + startsDayOfMonth) / DAYS_IN_WEEK; i++) {
    rez[i] = [];
    for (let j = 0; j != DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < startsDayOfMonth) || day > daysInMonth) {
        rez[i][j] = undefined;
      } else {
        rez[i][j] = new Date(year, month, day++);
      }
    }
  }
}

getMonthData(2022, Month.February);
