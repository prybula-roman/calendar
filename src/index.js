import { selectOptions } from "@testing-library/user-event/dist/select-options";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./sass/main.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";

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
  // console.log(daysInMonth);
  // console.log(startsDayOfMonth);
  // console.log(daysInMonth + startsDayOfMonth);
  let day = FIRST_DAY_MONTH;
  for (let i = 0; i < (daysInMonth + startsDayOfMonth) / DAYS_IN_WEEK; i++) {
    rez[i] = [];
    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < startsDayOfMonth) || day > daysInMonth) {
        rez[i][j] = undefined;
      } else {
        rez[i][j] = new Date(year, month, day++);
      }
    }
  }
}

//getMonthData(2022, Month.February);
////////////////////////////////////////////////////////
const divContainer = React.createElement(
  "div",
  {
    class: "div container",
    id: "calendar-container",
  },
  "divContainer"
);

const btnPrev = React.createElement(
  "button",
  {
    class: "btn",
    id: "btn-prev-day",
  },
  "<"
);

const btnNext = React.createElement(
  "button",
  {
    class: "btn",
    id: "btn-prev-day",
  },
  ">"
);

ReactDOM.render(divContainer, document.getElementById("root"));
///////////////////////////////////////////////////////////////////
const arrowLeft = "<";
const arrowRight = ">";
const BtnLeft = () => <button>{arrowLeft}</button>;
const BtnRight = () => <button>{arrowRight}</button>;

const arrMonth = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
// const SelectMonth=()=>(
// <select name="select">
//   <option value="value1">{arrMonth[0]}</option>
//   <option value="value2">{arrMonth[1]}</option>
//   <option value="value3">{arrMonth[2]}</option>
//   <option value="value4">{arrMonth[3]}</option>
//   <option value="value5">{arrMonth[4]}</option>
//   <option value="value6">{arrMonth[5]}</option>
//   <option value="value7">{arrMonth[6]}</option>
//   <option value="value8">{arrMonth[7]}</option>
//   <option value="value9">{arrMonth[8]}</option>
//   <option value="value10">{arrMonth[9]}</option>
//   <option value="value11">{arrMonth[10]}</option>
//   <option value="value12">{arrMonth[11]}</option>
// </select>

// );
const SelectMonth = ({ arr }) => (
  <ul>
    {arr.map((elem) => (
      <li>{elem}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <SelectMonth arr={arrMonth} />,
  document.getElementById("root")
);

const FormCalendar = (props) => (
  <>
    <BtnLeft />
    <SelectMonth arr={arrMonth} />
    <BtnRight />
  </>
);
/////////////////////////////////////////////////////////
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

console.log(
  'document.getElementById("root")=',
  document.getElementById("root")
);

// ReactDOM.render(
//   <BookList books={favouriteBooks} />,
//   document.getElementById("root")
// );
