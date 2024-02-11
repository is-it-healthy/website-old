import React, { useState, useEffect } from "react";
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
import Ocr from "./Ocr"
import About from "./components/About"
import Guide from "./components/Guide"

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

  useEffect(() => {
    document.title = 'is it healthy?';
  }, []);


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
          <h2>
            {item.code} ({item.name})
          </h2>
          <p>{item.more_info.side_effects}</p>
        </li>
      ));
    }
  };

  const displayAdditionalInformation = () => {
    if (eCodesData.length === 0) {
      return (
        <div className="data-curved-box">
          <p className="center-stuff">Please search to display results</p>
        </div>
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
              <FastfoodIcon style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              is it healthy?
            </Typography>
            {!isMobile && (
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab style={{ color: "white" }} label="Search" />
                <Tab style={{ color: "white" }} label="Guide" />
                <Tab style={{ color: "white" }} label="About Us" />
              </Tabs>
            )}
            <ToggleButtonGroup
              value={darkMode ? "dark" : "light"}
              exclusive
              onChange={() => setDarkMode(!darkMode)}
            >
              <ToggleButton value="dark">
                <Brightness4Icon style={{ color: "white" }} />
              </ToggleButton>
              <ToggleButton value="light">
                <Brightness7Icon style={{ color: "white" }} />
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
                    width: "30%",
                    height: "30%",
                    color: darkMode ? "white" : "#9c27b0",
                  }}
                />
              </div>
              <Ocr/>

              <div className="search-container center-stuff">
                <h1 className="main-title">Search INS Codes</h1>

                <TextField
                  id="searchInput"
                  type="text"
                  className="search-input"
                  placeholder="Enter INS Codes"
                  sx={{ height: "50px", width: "80%" }} // Set the desired height
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

              <br></br>
              <h1 className="main-title">Side Effects</h1>
              <div className="data-curved-box">
                <ul id="mainSideEffectsList" className="list">
                  {displaySideEffects()}
                </ul>
              </div>

              <br></br>
              <h1 className="main-title">Additional Information</h1>
              <div>
                <ul id="additionalEffectsList">
                  {displayAdditionalInformation()}
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </>
          )}

          {tabValue === 1 && (
            <Guide/>
          )}

          {tabValue === 2 && (
            <About/>
          )}
        </div>
      </Container>

      <Box sx={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
        <BottomNavigation
          showLabels
          value={tabValue}
          onChange={handleTabChange}
        >
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Guide" icon={<HelpIcon />} />
          <BottomNavigationAction label="About Us" icon={<InfoIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export default App;
