import React from 'react';
import './widgetSm.css';
import { newUser } from '../../datas'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';

const WidgetSm = () => {

    const isDark = useSelector((state)=>state.theme.isDark)

    return (
        <div className={isDark ? 'dark-mode widgetSm' : 'widgetSm'}>
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
                             <span className='widgetSmButton-text'>مشاهده</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSm;
