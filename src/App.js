import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState();

    const fetchTours = async () => {
        setLoading(true);
        try {
          const response = await axios.get(url);
          setTours(response.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
        
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return <main>{loading ? <Loading /> : <Tours tours={tours} />}</main>;
}

export default App;
