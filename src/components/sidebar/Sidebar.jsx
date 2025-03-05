import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Sidebar.css";

export default function Sidebar() {

   const isDark = useSelector((state)=>state.theme.isDark)
  const location = useLocation(); // شناسایی مسیر فعلی

  const isActive = (path) => location.pathname === path; // بررسی اینکه مسیر فعلی با مسیر لینک یکسان است

  return (
    <div className={isDark ? 'dark-mode sidebar' : 'sidebar'}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className={`sidebarListItem ${isActive("/") ? "active" : ""}`}>
                <LineStyleIcon className="sidebarIcon" />
                خانه
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">منوی سریع</h3>
          <ul className="sidebarList">

          <Link to="/Analytics" className="link">
              <li
                className={`sidebarListItem ${
                  isActive("/Analytics") ? "active" : ""
                }`}
              >
                <TimelineIcon className="sidebarIcon" />
                آنالیز
              </li>
            </Link>

            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  isActive("/users") ? "active" : ""
                }`}
              >
                <PermIdentityIcon className="sidebarIcon" />
                کاربران
              </li>
            </Link>

            <Link className="link">
              <li
                className="sidebarListItem  disabled"
              >
                <StorefrontIcon className="sidebarIcon " />
                محصولات
              </li>
            </Link>

            

            <li className="sidebarListItem disabled">
              <AttachMoneyIcon className="sidebarIcon" />
              معاملات
            </li>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">نوتیفیکیشن</h3>
          <ul className="sidebarList">
            <Link to='Feedback' className="link">
            <li className={`sidebarListItem ${
                  isActive("/Feedback") ? "active" : ""
                }`}>
              <DynamicFeedIcon className="sidebarIcon" />
              بازخورد
            </li>
            </Link>
            <Link to='Reports' className="link">
            <li className={`sidebarListItem ${
                  isActive("/Reports") ? "active" : ""
                }`}>
              <ReportGmailerrorredOutlinedIcon className="sidebarIcon" />
              گزارش ها
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">کارکنان</h3>
          <ul className="sidebarList">
            <Link to='Management' className="link">
            <li className={`sidebarListItem ${
                  isActive("/Management") ? "active" : ""
                }`}>
              <WorkOutlineIcon className="sidebarIcon" />
              مدیریت
            </li>
            </Link>
            <Link to='About' className="link">
            <li className={`sidebarListItem ${
                  isActive("/About") ? "active" : ""
                }`}>
              <HelpOutlineIcon className="sidebarIcon" />
              درباره ما
            </li>
            </Link>

            
          </ul>
        </div>
      </div>
    </div>
  );
}
