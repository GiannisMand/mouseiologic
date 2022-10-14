import React from "react";
import { AppBar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Image from "mui-image";

import logo from "public/logos/Logo-Sideways-Large.svg";

const StyledDivContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  //   padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Navbar = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <img
          src={logo}
          style={{ height: "auto", width: "5em" }}
          // draggable="false"
          // shift="top"
          // distance="2rem"
          // duration={2000}
          // shiftDuration={300}

          // sx={{ userSelect: "none" }}
        />
        {/* <Typography variant="h6">News</Typography> */}
      </AppBar>

      <StyledDivContent>{children}</StyledDivContent>
    </div>
  );
};

export default Navbar;
