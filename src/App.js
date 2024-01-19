import React, {useEffect, useState} from 'react';
import {api} from "./api/api";
import CalendarComponent from "./components/Calendar/CalendarComponent";
import Picture from "./components/Picture/Picture";


const App = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [pictureData, setPictureData] = useState([]);

    const sendDatesToServer = async (startDate, endDate) => {
        try {
            const response = await api.get(`?start_date=${startDate}&end_date=${endDate}`);
            setPictureData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDateSelection = (dates) => {
        setSelectedDates(dates);
        const startDate = formatDate(dates[0]);
        const endDate = formatDate(dates[dates.length - 1]);
        sendDatesToServer(startDate, endDate);
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const today = new Date();
        const startDate = formatDate(today);
        const endDate = formatDate(today);
        sendDatesToServer(startDate, endDate);
    }, []);

    return (
        <div className='appContainer'>
            <CalendarComponent onChange={handleDateSelection} selectedDates={selectedDates} />

            {pictureData.map((data) => (
                <Picture
                    key={data.date}
                    date={data.date}
                    title={data.title}
                    explanation={data.explanation}
                    url={data.url}
                    hdurl={data.hdurl}
                    copyright={data.copyrigh}
                />
            ))}
        </div>
    );
};

export default App;