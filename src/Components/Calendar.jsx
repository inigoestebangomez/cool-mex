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
  return (
     <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={onChange}
            customInput={<ExampleCustomInput className="showing-date"
            />}
          />
  )
}

export default Calendar
