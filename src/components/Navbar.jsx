import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useAutocomplete,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
const CustumToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const CutomDiv = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("div")(({ theme }) => ({
  //   backgroundColor: "white",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  display: "none",
  gap: "20px", // Note: The `gap` property might need vendor prefixes or alternative approaches for broader browser support
  alignItems: "center",
}));

const UserBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <CustumToolbar>
          <MenuIcon sx={{ display: { xs: "block", sm: "none" } }}></MenuIcon>
          <Typography
            variant="h4"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dawood's Social App
          </Typography>
          <CutomDiv>
            <InputBase placeholder="search........."></InputBase>
          </CutomDiv>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar
              onClick={(e) => {
                setOpen(true);
              }}
              sx={{ width: 30, height: 30 }}
              src="https://picsum.photos/200/300"
            ></Avatar>
          </Icons>
          <UserBox>
            <Avatar
              onClick={(e) => {
                setOpen(true);
              }}
              sx={{ width: 30, height: 30 }}
              src="https://picsum.photos/200/300"
            ></Avatar>
            <Typography component={"p"} sx={{ color: "white" }}>
              Dawood Israr
            </Typography>
          </UserBox>
        </CustumToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => {
            setOpen(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={{}}>Profile</MenuItem>
          <MenuItem onClick={{}}>My account</MenuItem>
          <MenuItem onClick={{}}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
