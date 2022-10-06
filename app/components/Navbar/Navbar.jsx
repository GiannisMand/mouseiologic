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
        <Image
          src={logo}
          // draggable="false"
          // shift="top"
          // distance="2rem"
          // duration={2000}
          // shiftDuration={300}
          // height="auto"
          // width="3.2em"
          // sx={{ userSelect: "none" }}
        />
        {/* <Typography variant="h6">News</Typography> */}
      </AppBar>

      <StyledDivContent>{children}</StyledDivContent>
    </div>
  );
};
