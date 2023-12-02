import React from "react";
import { useLocation } from "react-router-dom";
import {
  ChartSidebar,
  FacilityDataSidebar,
  Logo,
  MsgSidebar,
  SettingsSidebar,
  UserMgtSidebar,
} from "../../assets/svg";

export default function Sidebar() {
  let location = useLocation();
  return (
    <div className="app-sidebarWrap">
      <div className="appLogo">
        <Logo />
      </div>

      <ul className="sidebarList">
        <li onClick={() => {}}>
          <ChartSidebar
            color={
              location.pathname == "/home" || location.pathname == "/"
                ? "#FFB82F"
                : "white"
            }
          />
          <span
            style={
              location.pathname == "/home" || location.pathname == "/"
                ? { color: "#FFB82F" }
                : { color: "white" }
            }
          >
            Data Report
          </span>
        </li>

        <li onClick={() => {}}>
          <FacilityDataSidebar
            color={location.pathname == "/facility_data" ? "#FFB82F" : "white"}
          />
          <span
            style={
              location.pathname == "/facility_data"
                ? { color: "#FFB82F" }
                : { color: "white" }
            }
          >
            Facility Data
          </span>
        </li>

        <li onClick={() => {}}>
          <UserMgtSidebar
            color={location.pathname == "/user_managment" ? "#FFB82F" : "white"}
          />
          <span
            style={
              location.pathname == "/user_managment"
                ? { color: "#FFB82F" }
                : { color: "white" }
            }
          >
            User Managment
          </span>
        </li>

        <li onClick={() => {}}>
          <MsgSidebar
            color={location.pathname == "/notifications" ? "#FFB82F" : "white"}
          />
          <span
            style={
              location.pathname == "/notifications"
                ? { color: "#FFB82F" }
                : { color: "white" }
            }
          >
            Notifications
          </span>
        </li>

        <li onClick={() => {}}>
          <SettingsSidebar
            color={
              location.pathname == "/profile_settings" ? "#FFB82F" : "white"
            }
          />
          <span
            style={
              location.pathname == "/profile_settings"
                ? { color: "#FFB82F" }
                : { color: "white" }
            }
          >
            Profile Settings
          </span>
        </li>
      </ul>
    </div>
  );
}
