import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarComponent from './components/Calendar/CalendarComponent';
import Picture from './components/Picture/Picture';

const App = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [pictureData, setPictureData] = useState([]);

    const sendDatesToServer = async (startDate, endDate) => {
        try {
            const apiKey = '2LnvLoff9Oyvf0mgYyrABwCRJjbD2uvVyFHtYBtk';
            const baseUrl = 'https://api.nasa.gov/planetary/apod';
            const url = `${baseUrl}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
            const response = await axios.get(url);

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
        <div className="appContainer">
            <CalendarComponent onChange={handleDateSelection} selectedDates={selectedDates} />

            {pictureData.map((data) => (
                <Picture
                    key={data.date}
                    date={data.date}
                    title={data.title}
                    explanation={data.explanation}
                    url={data.url}
                    hdurl={data.hdurl}
                    media_type={data.media_type}
                    service_version={data.service_version}
                    copyright={data.copyrigh}
                />
            ))}
        </div>
    );
};

export default App;