import React, { createContext, useContext, useEffect, useState } from 'react';

const TimeOptionsContext = createContext();

export const useTimeOptions = () => useContext(TimeOptionsContext);

export const TimeOptionsProvider = ({ children }) => {
    const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [availableTimes, setAvailableTimes] = useState(timeOptions);
            const [data, setData] = useState({});

    const fetchData = () => {
        fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData.availableTimes))
            .catch((error) => console.log(error))
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <TimeOptionsContext.Provider value={{ availableTimes, setAvailableTimes }}>
            {children}
        </TimeOptionsContext.Provider>
    );
};
