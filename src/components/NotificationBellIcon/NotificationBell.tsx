import React, { useState } from 'react';
import './NotificationBell.css';

const NotificationBell = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, text: "Team member removed", date: "03 May, 24 | 10:45 AM" },
        { id: 2, text: "Add photos etc in your team slide", date: "01 May, 24 | 11:06 PM" },
        { id: 3, text: "BM is not clear. How are you earning money?", date: "01 May, 24 | 11:06 PM" },
        { id: 4, text: "TAM, SAM SOM not clear", date: "01 May, 24 | 11:05 PM" },
        { id: 5, text: "Innovation is lost in features", date: "01 May, 24 | 11:04 PM" },
        { id: 6, text: "Problem cannot be the solution!", date: "01 May, 24 | 11:03 PM" }
    ]);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const clearAllNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className="notification-bell">
            <button onClick={toggleNotifications} className="bell-icon">
                🔔
            </button>
            {showNotifications && (
                <div className="notifications-dropdown">
                    <div className="notifications-header">
                        <span>Your Notifications</span>
                        <button onClick={clearAllNotifications} className="clear-all-btn">Clear All</button>
                    </div>
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <div key={notification.id} className="notification-item">
                                <p>{notification.text}</p>
                                <span>{notification.date}</span>
                            </div>
                        ))
                    ) : (
                        <div className="notification-item">
                            <p>No notifications available</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
