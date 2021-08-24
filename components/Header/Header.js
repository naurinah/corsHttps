import {useEffect, useState} from 'react'
import styles from "./Header.module.css";
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import ProfileBox from '../ProfileBox/ProfileBox';
import QuickActionBox from '../QuickActionsBox/QuickActionsBox';
import NotificationBox from '../NotificationBox/NotificationBox';
import { useRef } from "react";
import useVisible from "../../hooks/useVisible"
import Link from 'next/link'
import { useCookies } from "react-cookie"
import Tooltip from '@material-ui/core/Tooltip';
// import  "../node_modules/flat-icons/ecommerce.css";
// import "../node_modules/flat-icons/interface.css";
// import "../node_modules/flat-icons/technology.css";
// import "../node_modules/flat-icons/creative.css"


const Header = () => {
    const [{sidebarDisplay, name}, dispatch] = useStateValue();
    const [menu, setMenu] = useState('none');
    const [profileBox, setProfileBox] = useState('none');
    const [quickActionBox, setQuickActionBox] = useState('none');
    const [notificationBox, setNotificationBox] = useState('none');
    const ref = useRef();
    const [cookie, setCookie] = useCookies(["user"])

    
    useVisible(ref, () => {
        setProfileBox("none");
        setQuickActionBox("none");
        setNotificationBox("none");
    });

    const handleMenu = () => {
        setMenu("block")
        dispatch({
            type: actionTypes.SET_DISPLAY,
            term: menu
        });
    }

    const handleProfileBox = () => {
        setProfileBox(profileBox === "none" ? "block" : "none");
        if (quickActionBox === "block") setQuickActionBox("none");
        if (notificationBox === "block") setNotificationBox("none");
    }

    const handleQuickActionBox = () => {
        setQuickActionBox(quickActionBox === "none" ? "block" : "none");
        if (profileBox === "block") setProfileBox("none");
        if (notificationBox === "block") setNotificationBox("none");
    }

    const handleNotificationBox = () => {
        setNotificationBox(notificationBox === "none" ? "block" : "none");
        if (profileBox === "block") setProfileBox("none");
        if (quickActionBox === "block") setQuickActionBox("none");
    }

    

    return ( 
        <header className={styles.header} style={{position:"fixed",width:"100%"}}>
            <div className={styles.left}>
                <MenuIcon onClick={handleMenu} className={styles.menu} />
                <Link href="/dashboard"><img src="/logoinner.svg" alt="logo"/></Link>
            </div>
            <div className={styles.right}>
                <div className={styles.text}>
                    Do you need help? Please call us at: &nbsp;
                    <span>021-111-BLUE-EX (021-111-258339)</span>
                </div>
                <div ref={ref} className={styles.icons}>
                <Tooltip title="News & Logs" aria-label="News & Logs">
                <img src="../images/noti.png" className={`${styles.icon} ${styles.bell}`} onClick={handleNotificationBox}/> 
                </Tooltip>
                <Tooltip title="Quick Actions" aria-label="Quick Actions">
                <img src="../images/share-2.png" className={styles.icon} onClick={handleQuickActionBox}/>
                </Tooltip>
                <Tooltip title="Profile" aria-label="Profile">
                <img src="../images/profile-4.png" className={`${styles.icon}`} onClick={handleProfileBox} />
                </Tooltip>
                    {/* <NotificationsIcon className={`${styles.icon} ${styles.bell}`} onClick={handleNotificationBox} />
                    <ShareIcon className={styles.icon} onClick={handleQuickActionBox} />
                    <AccountCircleIcon className={styles.icon} onClick={handleProfileBox} /> */}
                    <div className={styles.store} onClick={handleProfileBox}>
                        Hello <b>{cookie !== undefined && "FOC"} !</b>
                    </div>
                    <ProfileBox display={profileBox} />
                    <QuickActionBox display={quickActionBox} />
                    <NotificationBox display={notificationBox} />
                </div>
            </div>
            
        </header>
     );
}
 
export default Header;