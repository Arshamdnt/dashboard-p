import React from 'react';
import './widgetSm.css';
import { newUser } from '../../datas'; 
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">کاربران جدید</span>
            <ul className="widgetSmList">
                {newUser.map((user) => (
                    <li key={user.id} className="widgetSmListItem">
                        <div className="widgetSmUserDetails">
                            <img src={user.img} alt="کاربر" className="widgetSmImg" />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.userName}</span>
                                <span className="widgetSmUserTitle">{user.title}</span>
                            </div>
                        </div>
                        <button className="widgetSmButton">
                            <VisibilityIcon className="widgetSmIcon" />
                            مشاهده
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSm;
