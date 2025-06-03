import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { Card, CardHeader, Divider, Typography } from "@mui/material";

const SideNav: React.FC = () => {
  return (
    <Card style={{boxShadow :"none", borderRadius: "0px", margin: "0px", padding: "0px"}}>
      <CardHeader 
      subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "left", fontWeight: "bold" }}>
              Categorias
            </Typography>
          </ListSubheader>
        }
      />
      {/* <Divider /> */}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </List>
    </Card>
  );
};

export default SideNav;
