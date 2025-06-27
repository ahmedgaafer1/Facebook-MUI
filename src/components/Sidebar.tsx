import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Person as PersonIcon,
  Group as GroupIcon,
  Bookmark as BookmarkIcon,
  Schedule as ScheduleIcon,
  Flag as FlagIcon,
  OndemandVideo as VideoIcon,
  Storefront as StoreIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <PersonIcon />, text: "Your Profile", primary: true },
    { icon: <GroupIcon />, text: "Friends" },
    { icon: <BookmarkIcon />, text: "Saved" },
    { icon: <ScheduleIcon />, text: "Memories" },
    { icon: <FlagIcon />, text: "Pages" },
    { icon: <VideoIcon />, text: "Video" },
    { icon: <StoreIcon />, text: "Marketplace" },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        backgroundColor: "background.default",
        borderRight: 1,
        borderColor: "divider",
        pt: 8, // Account for AppBar height
        overflow: "auto",
      }}
    >
      <List sx={{ px: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.primary ? (
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    src="https://randomuser.me/api/portraits/men/71.jpg"
                  />
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: item.primary ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <ArrowDownIcon />
            </ListItemIcon>
            <ListItemText primary="See more" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider sx={{ mx: 2, my: 1 }} />

      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Your shortcuts
        </Typography>
        <List dense>
          {["React Developers", "Material-UI Users", "Frontend Community"].map(
            (group, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ borderRadius: 2, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Avatar sx={{ width: 24, height: 24 }}>{group[0]}</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={group}
                    primaryTypographyProps={{ fontSize: "0.875rem" }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
