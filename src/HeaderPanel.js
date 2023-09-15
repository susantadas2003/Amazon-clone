import React from "react";
import "./HeaderPanel.css";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderPanel() {
  return (
    <div className="headerPanel">
      <div className="panel-ops">
        <div className="border_home All">
          <MenuIcon className="menu-icon" />

          <span>All</span>
        </div>

        <span className="border_home">Today's Deals </span>
        <span className="border_home">Customer Service </span>
        <span className="border_home">Registry </span>
        <span className="border_home">Gift Cards </span>
        <span className="border_home">Sell </span>
      </div>
    </div>
  );
}

export default HeaderPanel;
