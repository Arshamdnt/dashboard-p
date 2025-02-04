import React, { useState, useEffect, useRef } from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import ContrastIcon from '@mui/icons-material/Contrast';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

export default function Topbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(2);
  const [dismissedNotifications, setDismissedNotifications] = useState([]);
  const isDark = useSelector((state)=>state.theme.isDark)
  const dispatch = useDispatch()
  const handleToggle = ()=>{
      dispatch(toggleTheme())
  }

  const notifications = [
    { id: 1, message: "شما در حال مشاهده نمونه کار علیرضا دیانت هستید" },
    { id: 2, message: "امیدوارم مورد قبول باشد" },
  ];


  const notificationRef = useRef(null);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setBadgeCount(0);
  };


  const handleDismiss = (id) => {
    setDismissedNotifications([...dismissedNotifications, id]);
  };


  const filteredNotifications = notifications.filter(
    (notification) => !dismissedNotifications.includes(notification.id)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <div className= {isDark ? 'dark-mode topbar' : 'topbar'}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">علیرضا دیانت</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer Contrast" onClick={handleToggle}>
            <ContrastIcon />
    
          </div>
          <div
            className="topbarIconContainer notificationIcon"
            onClick={handleNotificationClick}
          >
            <NotificationsIcon />
            {badgeCount > 0 && <span className="topIconBadge">{badgeCount}</span>}
          </div>
          <div className="topbarIconContainer languageIcon">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer settingsIcon">
            <SettingsIcon />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/user.png`}
            className="topAvatar"
            alt="User Avatar"
          />
        </div>
      </div>

      {/* نمایش پنل نوتیفیکیشن */}
      {isNotificationOpen && (
        <div className="notificationBox" ref={notificationRef}>
          <div className="notificationHeader">
            <h3>نوتیفیکیشن‌ها</h3>
          </div>
          <div className="notificationList">
            {filteredNotifications.map((notification) => (
              <div key={notification.id} className="notificationItem">
                <span className="NotificationsMessage">{notification.message}</span>
                <button
                  className="dismissButton"
                  onClick={() => handleDismiss(notification.id)}
                >
                  بستن
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
