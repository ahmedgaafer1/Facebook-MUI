import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import { Circle as OnlineIcon } from "@mui/icons-material";

const RightSidebar: React.FC = () => {
  const contacts = [
    {
      name: "Laila Hassan",
      online: true,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Omar Khaled",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Noha Saleh",
      online: false,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Youssef Adel",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Sara Fathy",
      online: false,
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      name: "Mahmoud Zaki",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const birthdays = [
    {
      name: "Hana Mostafa",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ];

  const groupConversations = [
    "Frontend Squad",
    "Marketing Hub",
    "Friday Hangout",
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        backgroundColor: "background.default",
        pt: 8,
        px: 2,
        overflow: "auto",
      }}
    >
      {/* Birthdays */}
      <Card sx={{ mb: 2, mt: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Birthdays
          </Typography>
          {birthdays.map((person, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: 32, height: 32, mr: 2 }}
                src={person.avatar}
              />
              <Typography variant="body2">
                <strong>{person.name}</strong> has a birthday today
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      <Divider sx={{ mb: 2 }} />

      {/* Contacts */}
      <Typography variant="h6" color="text.secondary" sx={{ mb: 1, px: 1 }}>
        Contacts
      </Typography>

      <List dense>
        {contacts.map((contact, index) => (
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
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    contact.online ? (
                      <OnlineIcon
                        sx={{
                          color: "success.main",
                          fontSize: 12,
                          backgroundColor: "background.paper",
                          borderRadius: "50%",
                        }}
                      />
                    ) : null
                  }
                >
                  <Avatar sx={{ width: 32, height: 32 }} src={contact.avatar} />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={contact.name}
                primaryTypographyProps={{ fontSize: "0.875rem" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Group Conversations */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" color="text.secondary" sx={{ mb: 1, px: 1 }}>
        Group conversations
      </Typography>

      <List dense>
        {groupConversations.map((group, index) => (
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
                <Avatar sx={{ width: 32, height: 32 }}>{group[0]}</Avatar>
              </ListItemIcon>
              <ListItemText
                primary={group}
                primaryTypographyProps={{ fontSize: "0.875rem" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RightSidebar;
