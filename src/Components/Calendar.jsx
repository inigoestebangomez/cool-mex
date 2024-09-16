import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({ selectedDate, onChange }) {
  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  );

  const isDisabledDate = (date) => {
    const today = new Date();
    const day = date.getDay();

    if (date < today) {
      return true;
    }
   //monday 1, tuesday 2
    if (day === 0 || day === 1) {
      return false;
    }
    return true;
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={selectedDate}
      onChange={onChange}
      customInput={<ExampleCustomInput className="showing-date" />}
      filterDate={isDisabledDate}
      minDate={new Date()}
      shouldCloseOnSelect={true}
      calendarStartDay={1}
    />
  );
}

export default Calendar;
