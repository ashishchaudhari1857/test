import React, { useState } from 'react';
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';

const MYCalendar = (props) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div className='bg-light mt-2 p-3 rounded-lg' style={{ borderRadius: "14px" }}>
      <div className='fs-8 fw-bold' style={{ display: "flex", justifyContent: "space-around" }}>
        <div>check in</div>
        <div>check out</div>
      </div>
      <div>
        <DatePicker.RangePicker
          value={dateRange}
          onChange={handleDateChange}
          open={calendarOpen}
          onOpenChange={toggleCalendar}
        />
      </div>
    </div>
  );
}

export default MYCalendar;
