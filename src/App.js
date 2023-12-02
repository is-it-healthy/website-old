import React, { useState } from 'react';
import data from './data.json';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';


const App = () => {
  const [eCodesData, setECodesData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <div className="navbar">
            <Typography variant="h4">is it Healthy?</Typography>
          </div>

          <div className="search-container">
            <TextField
              id="searchInput"
              type="text"
              className="search-input"
              placeholder="Enter INS Codes"
            />
            <Button
              id="searchButton"
              variant="contained"
              className="search-button"
              onClick={handleSearch}
            >
              Search
            </Button>
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
            <ToggleButtonGroup
              value={darkMode ? 'dark' : 'light'}
              exclusive
              onChange={() => setDarkMode(!darkMode)}
            >
              <ToggleButton value="dark">Dark Mode</ToggleButton>
              <ToggleButton value="light">Light Mode</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
