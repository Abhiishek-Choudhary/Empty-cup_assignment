import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

function DesignerCard({ heading, content, num1, num2, num3, color, data, isShortlisted, onShortlist }) {
  return (
    <div className="flex" style={{ background: `${color}` }}>
      <div style={{ paddingLeft: 30, paddingTop: 15, paddingBottom: 15 }}>
        <div style={{ fontWeight: 400, fontSize: "18px", lineHeight: "100%" }}>{heading}</div>
        <img src="/star2.jpg" alt="star" style={{ width: "96px", height: "16px", marginTop: 10 }} />
        <p style={{ width: "211px", fontFamily: "Chivo", fontSize: "10px", marginTop: 20 }}>{content}</p>
        <div className="flex">
          <div style={{ width: "47px", height: "37px" }}>
            {num1}
            <p style={{ fontFamily: "Chivo", fontSize: "10px", textAlign: "center", marginRight: 15 }}>Projects</p>
          </div>
          <div style={{ width: "47px", height: "37px" }}>
            {num2}
            <p style={{ fontFamily: "Chivo", fontSize: "10px", textAlign: "center", marginRight: 35 }}>Years</p>
          </div>
          <div style={{ width: "47px", height: "37px" }}>
            {num3}
            <p style={{ fontFamily: "Chivo", fontSize: "10px", textAlign: "center", marginRight: 25 }}>Price</p>
          </div>
        </div>
        <div style={{ width: "133px", height: "19px", marginTop: 25 }}>
          <p style={{ fontFamily: "Chivo", fontSize: "16px" }}>+91 - 984532853</p>
        </div>
        <div style={{ width: "133px", height: "19px" }}>
          <p style={{ fontFamily: "Chivo", fontSize: "16px" }}>+91 - 984532853</p>
        </div>
      </div>
      <div style={{ background: "#D0D0D0" }} className="w-px h-48 m-4 ml-24"></div>
      <div className="side">
        <div style={{ paddingTop: 10 }}>
          <ArrowForwardIcon style={{ width: "23px", height: "22px", color: "#8D4337" }} />
          <p style={{ fontFamily: "Chivo", fontSize: "8px", color: "#8D4337" }}>Details</p>
        </div>
        <div style={{ paddingTop: 15 }}>
          <VisibilityOffIcon style={{ width: "23px", height: "22px", color: "#8D4337" }} />
          <p style={{ fontFamily: "Chivo", fontSize: "8px", color: "#8D4337", paddingLeft: 4 }}>Hide</p>
        </div>
        <div style={{ paddingTop: 15, cursor: "pointer" }} onClick={() => onShortlist(data.id)}>
          {isShortlisted ? (
            <BookmarkIcon style={{ width: "23px", height: "22px", color: "#8D4337" }} />
          ) : (
            <BookmarkBorderIcon style={{ width: "23px", height: "22px", color: "#8D4337" }} />
          )}
          <p style={{ fontFamily: "Chivo", fontSize: "8px", color: "#8D4337", marginTop: 5 }}>
            {isShortlisted ? "Shortlisted" : "Shortlist"}
          </p>
        </div>
        <div style={{ paddingTop: 15 }}>
          <ReportGmailerrorredIcon style={{ width: "23px", height: "22px", color: "#8D4337" }} />
          <p style={{ fontFamily: "Chivo", fontSize: "8px", color: "#8D4337", marginTop: 4 }}>Report</p>
        </div>
      </div>
    </div>
  );
}

export default DesignerCard;
