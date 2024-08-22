import React, { useState, useEffect, useContext } from 'react';
import API from '../utils/api.js';
import './getSuggestionsStyle.css'
import {AuthContext} from '../context/AuthContext';
const GetSuggestions = () => {
  const {setAuthenticated} = useContext(AuthContext)
  const [activities, setActivities] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const response = await API.get('/activity/getSuggestions', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        console.log(response.data)

        setActivities(response.data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching suggestions');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getSuggestions();
  }, [accessToken]);

  return (
    // <div>
    //   <h2>Activity Suggestions</h2>
    //   {loading && <p>Loading...</p>}
    //   {error && <p>Error: {error}</p>}
    //   {!loading && !error && (
    //     <pre>{activities}</pre>
    //   )}
    // </div>
    <div className="suggestions-container">
      <h2 className="suggestions-title">Suggestions to improve CO2 emissions based on your acitvities</h2>
      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Error: {error}</p>}
      {!loading && !error && (
        <div className="suggestions-content">
          {activities.split('\n').map((line, index) => (
            <p key={index} className="suggestion-line">{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetSuggestions;
