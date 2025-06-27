import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  OndemandVideo as VideoIcon,
  Storefront as StoreIcon,
  Group as GroupIcon,
  SportsEsports as GamingIcon,
  Menu as MenuIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "../context/ThemeContext";
import FacebookIcon from "@mui/icons-material/Facebook";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "15ch", // Increased default width
    [theme.breakpoints.up("sm")]: {
      width: "25ch", // Increased width on larger screens
      "&:focus": {
        width: "35ch", // Increased width on focus
      },
    },
  },
}));

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mr: 2,
              display: { xs: "none", sm: "block" },
            }}
          >
            <FacebookIcon fontSize="large" />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Facebook"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        {/* Center Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
          }}
        >
          <IconButton color="primary" size="large">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" size="large">
            <VideoIcon />
          </IconButton>
          <IconButton color="inherit" size="large">
            <StoreIcon />
          </IconButton>
          <IconButton color="inherit" size="large">
            <GroupIcon />
          </IconButton>
          <IconButton color="inherit" size="large">
            <GamingIcon />
          </IconButton>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ChatIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
            <Avatar
              sx={{ width: 32, height: 32 }}
              src="https://randomuser.me/api/portraits/men/71.jpg"
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 2,
              sx: { mt: 1.5, minWidth: 150 },
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
