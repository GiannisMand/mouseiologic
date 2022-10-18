import React, { useState } from "react";
import { AppBar, Box, Tabs, Tab, IconButton, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { NavLink } from "@remix-run/react";

import { ChevronRight } from "@mui/icons-material";

import Image from "mui-image";

import logo from "public/logos/placeholder.png";

const StyledDivContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
}));

const StyledNavTabs = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    visibility: "hidden",
    width: 0,
    height: 0,
  },
}));

const StyledNavTab = styled(Tab)(({ theme }) => ({
  color: "black",
  borderRadius: "0.2em",
  userSelect: "none",
}));

const StyledDrawerTabs = styled(Tabs)(({ theme }) => ({}));

const StyledDrawerTab = styled(Tab)(({ theme }) => ({
  color: "black",
  borderRadius: "0.2em",
  userSelect: "none",
}));

const StyledIconHamurgerButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "0 2em 0 2em",
  [theme.breakpoints.down("md")]: {
    padding: "0 1em 0 1em",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  maxWidth: "1600px",
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "64px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const navigationLinks = [
  { label: "Home", href: "Home" },
  { label: "About", href: "test" },
  { label: "temp", href: "test" },
  { label: "temp", href: "test" },
];

export const Navbar = ({ children }) => {
  const [value, setValue] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledAppBar position="sticky" sx={{ top: 0 }}>
        <StyledBox>
          <img src={logo} alt="" style={{ height: "50px", width: "auto" }} />
          <StyledNavTabs value={value} onChange={handleChange}>
            {navigationLinks.map((value, index) => (
              <StyledNavTab
                key={index}
                label={value.label}
                draggable={false}
                component={NavLink}
                to={value.href}
                // prefetch="render"
              />
            ))}
          </StyledNavTabs>

          <StyledIconHamurgerButton size="large" onClick={handleDrawerOpen}>
            <Menu sx={{ fontSize: "1.1em" }} />
          </StyledIconHamurgerButton>
        </StyledBox>
      </StyledAppBar>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="right"
        onClose={handleDrawerClose}
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton size="large" onClick={handleDrawerClose}>
            <ChevronRight sx={{ fontSize: "1.1em" }} />
          </IconButton>
        </DrawerHeader>

        <StyledDrawerTabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          sx={{
            ".MuiTabs-indicator": {
              left: 0,
            },
          }}
        >
          {navigationLinks.map((value, index) => (
            <StyledDrawerTab
              key={index}
              label={value.label}
              draggable={false}
              component={NavLink}
              to={value.href}
              // prefetch="render"
            />
          ))}
        </StyledDrawerTabs>
      </Drawer>

      <StyledDivContent>{children}</StyledDivContent>
    </div>
  );
};

export default Navbar;
