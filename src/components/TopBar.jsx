import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function TopBar({ toggle, checked }) {
  return (
    <div>
      {/* Header Bar */}
      <div className="flex mt-4 items-center mb-6">
        <img
          style={{ width: 46, height: 31, paddingLeft: 20, marginRight: 98 }}
          src="/Empty-logo.png"
          alt="logo"
        />
        <h2
          style={{
            color: "#716966",
            fontFamily: "Chivo",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "100%",
          }}
        >
          EmptyCup
        </h2>
        <MoreVertIcon style={{ marginLeft: "auto", marginRight: 20 }} />
      </div>

      <hr />

      {/* Filter Bar */}
      <div className="flex items-center justify-around p-5">
        <img src="/group6.png" alt="filter-icon-1" />
        <img src="/group7.png" alt="filter-icon-2" />
        <img src="/group8.png" alt="filter-icon-3" />

        {/* Shortlist Toggle */}
        <div onClick={toggle} style={{ cursor: "pointer" }}>
          <img src="/group.png" alt="shortlist-toggle" />
          <p
            style={{
              textAlign: "center",
              fontSize: "10px",
              fontFamily: "Chivo",
              color: checked ? "#8D4337" : "#716966",
              marginTop: 4,
            }}
          >
            {checked ? "Shortlisted" : ""}
          </p>
        </div>

        <img src="/group9.png" alt="filter-icon-4" />
      </div>
    </div>
  );
}

export default TopBar;
