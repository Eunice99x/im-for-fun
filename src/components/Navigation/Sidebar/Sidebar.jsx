import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SidebarItems from "./SidebarListItems";
import Logo from "../../assets/react.svg"
import { styled } from "@mui/material/styles";

const DrawerContainer = styled(Drawer)(({ theme, open }) => ({
  width: open ? 240 : 60,
  flexShrink: 0,
  whiteSpace: "nowrap",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(open
    ? { width: 240 }
    : {
        width: 60,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
}));

const getAbbr = (accountType) => {
  const abbreviations = {
    "Super Administrator": "S Admin.",
    "Account Holder": "Acc H.",
    Administrator: "Admin.",
    User: "User",
    "Compliance Certifier": "C Cert.",
    Manager: "Mgr",
    Reviewer: "Revr.",
  };
  return abbreviations[accountType] || "";
};

const getDisplayName = (firstname, lastname, open) => {

  return open
    ? `${firstname} ${lastname}`
    : `${firstname.charAt(0).toUpperCase()}.${lastname.charAt(0).toUpperCase()}.`;
};

const Sidebar = ({ userDetails, open, handleDrawerClose }) => {
//   const { firstname = "sdfs", lastname = "", userType = "" } = userDetails;

  return (
    <DrawerContainer variant="permanent" open={open}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0", position: "relative" }}>
        {open && <img src={Logo} alt="Logo" style={{ height: 50 }} />}
        <IconButton onClick={handleDrawerClose} style={{ position: "absolute", right: "-35px" }}>
          <ChevronLeftIcon style={{ height: 20, width: 20 }} />
        </IconButton>
      </div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        {open ? (
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              backgroundColor: "#f3f3f3",
              border: "5px solid #989898",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 30,
              color: "#959699",
            }}
          >
            {getInitials(firstname, lastname)}
          </div>
        ) : (
          <br />
        )}
        <p style={{ fontSize: 14, fontWeight: "bold", margin: "5px 0" }}>{getDisplayName("younes", "outerbah", true)}</p>
        <p style={{ fontSize: 12 }}>{open}</p>
      </div>
      <SidebarItems open={open} />
    </DrawerContainer>
  );
};

export default Sidebar;