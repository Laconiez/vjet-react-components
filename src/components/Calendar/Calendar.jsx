import React, { Component } from 'react';
// import styled from 'react-emotion';
// import pt from 'prop-types';

// import padding from '../../styles/padding';

/* const CalendarStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      selectedMonth: 10,
      selectedYear: 2017,
    };
  }

  render() {
    const { selectedMonth, selectedYear, selectedDate } = this.state;

    return (
      <div>
        calendar {selectedYear} {selectedMonth}
        <div>{selectedDate.toString()}</div>
      </div>
    );
  }
}

export default Calendar;
