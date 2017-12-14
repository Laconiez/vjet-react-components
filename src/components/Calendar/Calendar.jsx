import React, { Component } from 'react';
import moment from 'moment';
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
      selectedDate: moment(),
      selectedMonth: moment().startOf('month'),
    };

    this.weekdays = [];
    const date = moment();
    for (let i = 0; i < 7; i += 1) {
      this.weekdays.push(date.weekday(i).format('ddd'));
    }
  }

  render() {
    const { selectedMonth, selectedDate } = this.state;

    const days = [];

    for (let i = 0, to = selectedMonth.weekday(); i < to; i += 1) {
      days.push(`-- ${moment(selectedMonth)
        .subtract('days', (i - selectedMonth.weekday()) * -1)
        .format('DD')}`);
    }
    const endOfMonth = moment(selectedMonth)
      .endOf('month')
      .date();
    for (let i = 1; i <= endOfMonth; i += 1) {
      days.push(i);
    }

    return (
      <div>
        calendar {selectedMonth.format('YYYY')} {selectedMonth.format('MMMM')}
        <div>{selectedDate.format('DD-MM-YYYY')}</div>
        <div>{this.weekdays.map(wd => <div>{wd}</div>)}</div>
        {days.map(day => <div>{day}</div>)}
      </div>
    );
  }
}

export default Calendar;
