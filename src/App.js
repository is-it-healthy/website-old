import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
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
import About from "./components/About"
import Guide from "./components/Guide"
import Search from "./components/Search"

const App = () => {
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
            <Search />
          )}

          {tabValue === 1 && (
            <Guide />
          )}

          {tabValue === 2 && (
            <About />
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
