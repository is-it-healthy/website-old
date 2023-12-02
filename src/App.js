import React, { useState } from 'react';
import data from './data.json';

const App = () => {
  const [eCodesData, setECodesData] = useState([]);

  const splitToList = (txt) => {
    return txt.split(',').map((item) => item.trim());
  };

  const getECodeData = (eCodesList) => {
    return eCodesList.map((key) => data[key]).filter(Boolean);
  };

  const displaySideEffects = () => {
    if (eCodesData.length === 0) {
      return <li className='list-item'>Please search to display results</li>;
    } else {
      return eCodesData.map((item) => (
        <li key={item.code} className='list-item'>
          <strong>
            {item.code} ({item.name}):
          </strong>{' '}
          {item.more_info.side_effects}
        </li>
      ));
    }
  };

  const displayAdditionalInformation = () => {
    if (eCodesData.length === 0) {
      return <li><h3>Please search to display results</h3></li>;
    } else {
      return eCodesData.map((item) => (
        <li key={item.code}>
          <h2 className='sub-title'>
            {item.name} - {item.code}
          </h2>
          <h3 className='sub-category'>Side Effects</h3>
          <p className='description'>{item.more_info.side_effects}</p>

          <h3 className='sub-category'>Functions</h3>
          <p className='description'>{item.more_info.side_effects}</p>

          <h3 className='sub-category'>Characteristics</h3>
          <p className='description'>{item.more_info.characteristics}</p>

          <h3 className='sub-category'>Origin</h3>
          <p className='description'>{item.more_info.origin}</p>

          <h3 className='sub-category'>Products</h3>
          <p className='description'>{item.more_info.products}</p>

          <h3 className='sub-category'>Daily Intake</h3>
          <p className='description'>{item.more_info.daily_intake}</p>

          <h3 className='sub-category'>Dietary Restrictions</h3>
          <p className='description'>{item.more_info.dietary_restrictions}</p>
        </li>
      ));
    }
  };

  const handleSearch = () => {
    const inputText = document.getElementById('searchInput').value;
    const eCodesList = splitToList(inputText);
    const eCodes = getECodeData(eCodesList);
    setECodesData(eCodes);
  };

  return (
    <div>
      <div className="navbar">
        <h1>is it Healthy?</h1>
      </div>

      <div className="search-container">
        <input id="searchInput" type="text" className="search-input" placeholder="Enter INS Codes" />
        <button id="searchButton" className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <h2 className="title">Side Effects:</h2>
      <ul id="mainSideEffectsList" className="list">
        {displaySideEffects()}
      </ul>

      <h2 className="title">Additional Information:</h2>
      <div className="text-display">
        <ul id="additionalEffectsList">{displayAdditionalInformation()}</ul>
      </div>

      <div className="footer">
        <p>Made by Hirusha Adikari</p>
      </div>
    </div>
  );
};

export default App;
