import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css';

const CalendarComponent = ({onChange, selectedDates}) => {
    return (
        <div className={styles.calendarContainer}>
            <Calendar
                selectRange
                onChange={onChange}
                value={selectedDates}
                className={styles.calendar}
                tileClassName={styles.calendarTile}
            />
        </div>
    );
};

export default CalendarComponent;