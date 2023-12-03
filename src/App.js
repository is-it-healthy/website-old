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


  const licenseText_isItHealthy = `
MIT License

Copyright (c) 2023 Hirusha Adikari
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

  const licenseText_react = `
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

  const licenseText_materialui = `
The MIT License (MIT)

Copyright (c) 2014 Call-Em-All

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

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
            <>
              <h1 className="center-stuff">Guide / Support</h1>
              <div>
                <h2>How to Use "Is It healthy?"</h2>
                <p>
                  Using our app and website is easy and efficient. The primary function of "Is It Healthy?" is to provide
                  you
                  with detailed information about food additives associated with INS and E-codes. Follow these simple
                  steps to
                  get started:
                </p>
                <ol>
                  <li>
                    <strong>Search Tab:</strong>
                    In the middle tab of our app or website, you'll find the search bar. This
                    is where you enter the INS and E-codes you want to investigate. You can enter multiple codes at
                    once,
                    separated by commas. No need to include "INS" or "E-" before the code. For example, simply input
                    "100,
                    104, 304" and click "Search."
                  </li>
                  <li>
                    <strong>Search Results:</strong>
                    Once you hit "Search," our system will process the codes and provide
                    you with valuable information about each additive.
                  </li>
                </ol>
                <h2>What You'll Find</h2>
                <p>The search results will be displayed in two main sections:</p>
                <ol>
                  <li>
                    <strong>Side Effects:</strong>
                    In this section, you'll see the potential side effects associated with
                    each INS or E-code you entered. We aim to provide you with a clear and concise summary of any known
                    health concerns related to these additives.
                  </li>
                  <li>
                    <strong>Detailed Information:</strong>
                    In the second section, you will find comprehensive details about
                    each additive. This includes information on its origin, common uses in food products, and regulatory
                    approval status. This section is designed to give you a more in-depth understanding of the additive
                    in
                    question.
                  </li>
                </ol>
              </div>

              <h2>Note: I'm not responsible for the accuracy of data. It's all scraped from <a href="https://www.food-info.net/uk/index.htm">www.food-info.net</a></h2>
            </>
          )}

          {tabValue === 2 && (
            <>
              <h1 className="center-stuff">About</h1>
              <div>
                <p>
                  Welcome to "Is it Healthy?" - your ultimate guide to making healthier choices and staying informed about
                  the food you consume! In a world where artificial additives are prevalent in the majority of food items,
                  it's crucial to understand the potential health risks they may pose. With our website, and the Android
                  app, we provide you with the tools and information necessary to select your meals wisely.
                  <br></br>
                  <br></br>
                  I recognize the importance of maintaining a healthy lifestyle through mindful eating. This platform
                  empowers you to take control of your health by easily accessing information about the additives
                  contained in the food you plan to purchase and consume. By simply entering the INS codes of additives
                  found on food labels, you can instantly uncover the potential health risks associated with them.
                  <br></br>
                  <br></br>
                  This user-friendly interface ensures that you can make informed decisions about the food you choose to
                  eat. Whether you're at the grocery store, a restaurant, or planning your meals at home, "Is it Healthy?"
                  gives you the peace of mind you deserve. By understanding the impact of additives on your health, you
                  can take proactive steps towards a healthier, more nourishing lifestyle.
                  <br></br>
                  <br></br>
                  Discover the hidden truths behind the food you eat and embark on a journey of informed and healthier
                  choices with "Is it Healthy?" Start using my website, or my Android app today and take the first
                  step towards a healthier you.
                </p>
                <br></br>
                <h2 className="center-stuff">built by <a href="https://github.com/is-it-healthy">@hirushaadi</a></h2>
                <hr></hr>
                <div className="center-stuff code">

                  <h1 className="center-stuff">License</h1>
                  <pre style={{ overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_isItHealthy }} />

                  <h1 className="center-stuff">Other Licenses</h1>
                  <h2 className="center-stuff">
                    <a href="https://github.com/facebook/react/blob/main/LICENSE">
                      React
                    </a>
                  </h2>
                  <pre style={{ overflowY: 'auto', maxHeight: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_react }} />

                  <h2 className="center-stuff">
                    <a href="https://github.com/mui/material-ui/blob/master/LICENSE">
                      Material UI
                    </a>
                  </h2>
                  <pre style={{ overflowY: 'auto', maxHeight: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_materialui }} />
                  <h2 className="center-stuff">built by @hirushaadi</h2>
                </div>
              </div>
            </>
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
