import React from "react";
import { AppBar, Box, Tabs, Tab, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { NavLink } from "@remix-run/react";

import Image from "mui-image";

import logo from "public/logos/placeholder.png";

const StyledDivContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginRight: "2em",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "black",
  borderRadius: "0.2em",
  userSelect: "none",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: "1em",
}));

export const Navbar = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          height: "64px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{ height: "50px", width: "auto", marginLeft: "2em" }}
          />
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab
              label="Home"
              component={NavLink}
              draggable={false}
              to="Home"
            />
            <StyledTab
              label="About"
              component={NavLink}
              draggable={false}
              to="test"
            />
            <StyledTab
              label="Temp"
              component={NavLink}
              draggable={false}
              to="Home"
            />
            <StyledTab
              label="Temp"
              component={NavLink}
              draggable={false}
              to="Home"
            />
            <StyledTab
              label="Temp"
              component={NavLink}
              draggable={false}
              to="Home"
            />
          </StyledTabs>

          <StyledIconButton size="large">
            <Menu sx={{ fontSize: "1.1em" }} />
          </StyledIconButton>
        </Box>
      </AppBar>

      <StyledDivContent>{children}</StyledDivContent>
    </div>
  );
};

export default Navbar;
