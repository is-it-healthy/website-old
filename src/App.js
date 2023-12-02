import React, { useState } from "react";
import data from "./data.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { purple } from "@mui/material/colors";

const App = () => {
  const [eCodesData, setECodesData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const isMobile = useMediaQuery("(max-width:600px)");

  const theme = createTheme({
    palette: {
      primary: purple,
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const splitToList = (txt) => {
    return txt.split(",").map((item) => item.trim());
  };

  const getECodeData = (eCodesList) => {
    return eCodesList.map((key) => data[key]).filter(Boolean);
  };

  const displaySideEffects = () => {
    if (eCodesData.length === 0) {
      return (
        <div className="center-stuff">
          Please search to display results<br></br>
        </div>
      );
    } else {
      return eCodesData.map((item) => (
        <li key={item.code} className="list-item">
          <p class="data-title">
            {item.code} ({item.name})
          </p>
          <p class="data-value">{item.more_info.side_effects}</p>
        </li>
      ));
    }
  };

  const displayAdditionalInformation = () => {
    if (eCodesData.length === 0) {
      return (
        <li>
          <h3>Please search to display results</h3>
        </li>
      );
    } else {
      return eCodesData.map((item) => (
        <>
          <li key={item.code} className="data-curved-box">
            <h2 className="sub-title">
              {item.name} - {item.code}
            </h2>
            <h3>Side Effects</h3>
            <p>{item.more_info.side_effects}</p>

            <h3>Functions</h3>
            <p>{item.more_info.side_effects}</p>

            <h3>Characteristics</h3>
            <p>{item.more_info.characteristics}</p>

            <h3>Origin</h3>
            <p>{item.more_info.origin}</p>

            <h3>Products</h3>
            <p>{item.more_info.products}</p>

            <h3>Daily Intake</h3>
            <p>{item.more_info.daily_intake}</p>

            <h3>Dietary Restrictions</h3>
            <p>{item.more_info.dietary_restrictions}</p>
          </li>
          <br></br>
          <br></br>
        </>
      ));
    }
  };

  const handleSearch = () => {
    const inputText = document.getElementById("searchInput").value;
    const eCodesList = splitToList(inputText);
    const eCodes = getECodeData(eCodesList);
    setECodesData(eCodes);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FastfoodIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              is it healthy?
            </Typography>
            {!isMobile && (
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Main" />
                <Tab label="How to Use" />
                <Tab label="About Us" />
              </Tabs>
            )}
            <ToggleButtonGroup
              value={darkMode ? "dark" : "light"}
              exclusive
              onChange={() => setDarkMode(!darkMode)}
            >
              <ToggleButton value="dark">
                <Brightness4Icon /> {/* Dark Mode Icon */}
              </ToggleButton>
              <ToggleButton value="light">
                <Brightness7Icon /> {/* Light Mode Icon */}
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>

      <Container>
        <div className="content">
          {tabValue === 0 && (
            <>
              <div className="center-stuff">
                <FastfoodIcon
                  style={{
                    width: "40%",
                    height: "40%",
                    color: darkMode ? "white" : "#9c27b0",
                  }}
                />
              </div>
              <div className="search-container center-stuff">
                <h1 className="main-title">Search INS Codes</h1>

                <TextField
                  id="searchInput"
                  type="text"
                  className="search-input"
                  placeholder="Enter INS Codes"
                  sx={{ height: "50px" }} // Set the desired height
                />
                <Button
                  id="searchButton"
                  variant="contained"
                  className="search-button"
                  onClick={handleSearch}
                  sx={{ height: "55px" }} // Set the same height as TextField
                >
                  <SearchIcon />
                </Button>
              </div>

              <h1 className="main-title">Side Effects</h1>
              <div class="data-curved-box">
                <ul id="mainSideEffectsList" className="list">
                  {displaySideEffects()}
                </ul>
              </div>

              <h1 className="main-title">Additional Information</h1>
              <div className="text-display">
                <ul id="additionalEffectsList">
                  {displayAdditionalInformation()}
                </ul>
              </div>
            </>
          )}

          {tabValue === 1 && (
            <div>
              <h2>How to Use Guide</h2>
              {/* Add content for the how-to-use guide */}
            </div>
          )}

          {tabValue === 2 && (
            <div>
              <h2>About Us</h2>
              {/* Add content for the About Us section */}
            </div>
          )}
        </div>

        <div className="footer">
          <p>Made by Hirusha Adikari</p>
        </div>
      </Container>

      <Box sx={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
        <BottomNavigation
          showLabels
          value={tabValue}
          onChange={handleTabChange}
        >
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Info" icon={<HelpIcon />} />
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export default App;
