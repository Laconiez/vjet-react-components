import React, { Component } from 'react';
import moment from 'moment';

import 'moment/locale/ru';
import styled from 'react-emotion';
// import pt from 'prop-types';

// import padding from '../../styles/padding';

const CalendarStyle = styled('div')`
  display: flex;
  flex-direction: column;
  min-width: 320px;
`;

const WeekdaysStyle = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const DaysWrapperStyle = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const DayStyle = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 13%;
  opacity: ${props => (props.notCurrentMonth ? 0.5 : 1)};
`;

function getDays(selectedMonth, formatDate) {
  const days = [];

  // previous month
  for (let i = 0, to = selectedMonth.weekday(); i < to; i += 1) {
    const date = moment(selectedMonth).subtract('days', (i - selectedMonth.weekday()) * -1);

    days.push({
      id: date.format('YYYYMMDD'),
      value: date.format(formatDate),
      currentMonth: false,
    });
  }

  // current month
  const endOfMonth = moment(selectedMonth)
    .endOf('month')
    .date();
  for (let i = 1; i <= endOfMonth; i += 1) {
    const date = moment(selectedMonth).date(i);
    days.push({
      id: date.format('YYYYMMDD'),
      value: date.format(formatDate),
      currentMonth: true,
    });
  }

  // next month
  const monthEnd = moment(selectedMonth).endOf('month');
  for (let i = 1, to = 6 - monthEnd.weekday(); i <= to; i += 1) {
    const date = moment(monthEnd).add('days', i);
    days.push({
      id: date.format('YYYYMMDD'),
      value: date.format(formatDate),
      currentMonth: false,
    });
  }

  return days;
}

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

    moment.locale('ru');

    this.subtractMonth = this.subtractMonth.bind(this);
    this.addMonth = this.addMonth.bind(this);
    this.setToday = this.setToday.bind(this);
  }

  setToday() {
    this.setState({ selectedMonth: moment().startOf('month') });
  }

  addMonth() {
    this.setState({ selectedMonth: this.state.selectedMonth.add('month', 1) });
  }

  subtractMonth() {
    this.setState({ selectedMonth: this.state.selectedMonth.subtract('month', 1) });
  }

  render() {
    const { selectedMonth, selectedDate } = this.state;

    const days = getDays(selectedMonth, 'D');

    return (
      <CalendarStyle>
        calendar {selectedMonth.format('YYYY')} {selectedMonth.format('MMMM')}
        <div>
          {selectedDate.format('DD-MM-YYYY')}
          <button onClick={this.subtractMonth}>{'<'}</button>
          <button onClick={this.addMonth}>{'>'}</button>
          <button onClick={this.setToday}>Today</button>
        </div>
        <WeekdaysStyle>{this.weekdays.map(wd => <DayStyle>{wd}</DayStyle>)}</WeekdaysStyle>
        <DaysWrapperStyle>
          {days.map(day => (
            <DayStyle key={day.id} notCurrentMonth={!day.currentMonth}>
              {day.value}
            </DayStyle>
          ))}
        </DaysWrapperStyle>
      </CalendarStyle>
    );
  }
}

export default Calendar;
