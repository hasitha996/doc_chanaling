
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import { subDays } from "date-fns";
import '../style/DaypikStyle.scss';

import { LeftOutlined, RightOutlined, CalendarOutlined } from '@ant-design/icons';



const AppDatepicker = (array) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const [year, setYear] = useState("");
  const [show, setShow] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 9;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const years = generateArrayOfYears();

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="white-box p-20">
      {(() => {
        let highlight = [];

        for (let index = 0; index < array.length; index++) {
          highlight.push(subDays(new Date(`${array[index].date}`), 0));
        }
        return (
          <>
            <button className="example-custom-input" onClick={handleClick}>

              <CalendarOutlined />
            </button>
            {isOpen && (


              <DatePicker
                locale="id"
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled
                }) => (
                  <div
                    style={{
                      marginBottom: "0px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <select
                      value={months[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                      className="mr-2"
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      className="btn-left"
                    >
                      <LeftOutlined />
                    </button>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      className="btn-right"
                    >
                      <RightOutlined />
                    </button>
                  </div>
                )}
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                highlightDates={highlight}
                onChange={handleChange}
                inline
              />

            )}
          </>
        );
      })()}
    </div>
  )

};



export default AppDatepicker;
