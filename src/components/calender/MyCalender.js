import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap-daterangepicker/daterangepicker.css'; // Import Date Range Picker CSS

function MyCalender() {
  const [dateRange, setDateRange] = useState('');

  const handleDateRangeChange = (event, picker) => {
    setDateRange(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  };

  return (
    <div className='bg-light mt-2 p-3 rounded-lg' style={{ borderRadius: "14px" }}>
      <div className='justify-content-around d-flex fw-bold'>
        <div>Check in</div>
        <div> Check out</div>
      </div>
      <DateRangePicker onApply={handleDateRangeChange}>
        <input type="text" value={dateRange}  style={{width:"250px"}}  className='text-center rounded'/>
      </DateRangePicker>
     
    </div>
  );
}

export default MyCalender;
