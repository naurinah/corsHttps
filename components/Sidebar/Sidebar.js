import styles from "./Sidebar.module.css"
import Link from 'next/link'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import CloseIcon from '@material-ui/icons/Close';
import { useRef } from "react";
import useVisible from "../../hooks/useVisible"
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import bg from "date-fns/esm/locale/bg/index.js";
// import  "../node_modules/flat-icons/ecommerce.css";
// import "../node_modules/flat-icons/interface.css";
// import "../node_modules/flat-icons/technology.css";
// import "../node_modules/flat-icons/creative.css";


const Sidebar = () => {
    const [{sidebarDisplay}, dispatch] = useStateValue();
    const [width, setWidth] = useState(1365);
    const ref = useRef();

    useEffect(()=>{
        setWidth(window.innerWidth);
        if (width <= 1350){
            handleMenu();
        }
    },[width])

    useVisible(ref, () => {
        if (width <= 1350){
            handleMenu();
        }
    });

    const handleMenu = () => {
        dispatch({
            type: actionTypes.SET_DISPLAY,
            term: "none"
        });
    }
    
    const handleDisplay = id => {
        let ul = document.querySelector(`#${id}`);
        if(ul.style.display === "none") {
            ul.style.display = "flex"
            ul.style.display = "white" 
        }
        else {
            ul.style.display = "none";
        }

    }
    return ( 
        <div ref={ref} className={styles.sidebar} style={{display: sidebarDisplay}}>
            <div className={styles.upper}>
                <ul style={{marginTop: "65px"}}>
                    <li onClick={handleMenu} className={`${styles.cancel} ${styles.one}`}>
                        <CloseIcon/>
                    </li>
                    <Link href="/create-shipment">
                        <li className={`${styles.blue} ${styles.one}`}>
                            <div className={styles.icon}><ControlPointIcon /></div>
                            <div className={styles.name}>Create Shipment</div>
                        </li>
                    </Link>
                    <Link href="/dashboard">
                        <li className={styles.one}>
                            <div className={styles.icon}><img src="../images/menu.png"/></div>
                            <div className={styles.name}>Dashboard</div>
                        </li>
                    </Link>
                    <li>
                        <div className={styles.flex} onClick={() => handleDisplay("shipments")} >
                            <div className={styles.one}>
                                <div className={styles.icon }><img src="../images/add-1.png"/></div>
                                <div className={styles.name}>Shipments</div>
                            </div>
                            <div id="shipments-arrow" className={styles.arrow }><img src="../images/right-arrow.png"/></div>
                        </div>

                        <ul id="shipments" style={{display: "none" } }>
                            <Link href="/deliveries">Deliveries</Link>
                            <Link href="/pickup">Pickups</Link>
                            <Link href="/tracking">Multi-track</Link>
                            <Link href="/upload-booking">Bulk Import</Link>
                            <Link href="/return-requests">Return Request</Link>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.flex} onClick={() => handleDisplay("settlement")}>
                            <div className={styles.one}>
                                <div className={styles.icon}><img src="../images/bars-2.png"/></div>
                                <div className={styles.name}>Settlement</div>
                            </div>
                            <div id="settlement-arrow" className={styles.arrow}><img src="../images/right-arrow.png"/></div>
                        </div>

                        <ul id="settlement" style={{display: "none"}}>
                            <Link href="/statements">Statements</Link>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.flex} onClick={() => handleDisplay("support")}>   
                            <div className={styles.one}>
                                <div className={styles.icon}><img src="../images/help.png"/></div>
                                <div className={styles.name}>Support</div>
                            </div>
                            <div id="support-arrow" className={styles.arrow}><img src="../images/right-arrow.png"/></div>
                        </div>

                        <ul id="support" style={{display: "none"}}> 
                            <Link href="/developer-center">Developer Center</Link>
                            <Link href="/faqs">Knowledge Base</Link>
                            <Link href="/guides">Video Guides</Link>
                            <Link href="/release-notes">Release Notes</Link>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.flex}  onClick={() => handleDisplay("account")}>
                            <div className={styles.one}>
                                <div className={styles.icon}><img src="../images/profile-1.png"/></div>
                                <div className={styles.name}>Account</div>
                            </div>
                            <div id="account-arrow" className={styles.arrow}><img src="../images/right-arrow.png"/></div>
                        </div>

                        <ul id="account" style={{display: "none"}}>
                            <Link href="/profile">Profile</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/manage-users">Manage Users</Link>
                            <Link href="/pickup-locations">Pickup Location</Link>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={styles.lower}></div>
        </div>
     );
}
 
export default Sidebar;
