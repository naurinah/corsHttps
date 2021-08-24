import styles from "./ProfileBox.module.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import { useCookies } from "react-cookie"

const ProfileBox = ({display}) => {

    const [cookie, removeCookie] = useCookies(["user"])
    
    const logout = (req, res) => {
        removeCookie("user")
        console.log(cookie.user)
        window.location.href = '/';
    }

    return ( 
        <div className={styles.profileBox} style={{display: display}}>
            <div className={styles.notch}></div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <img src="/avatar.png" alt="avatar"/>
                    <div className={styles.text}>
                        <div className={styles.name}>FOC</div>
                        <div className={styles.email}><a href="mailto:ask@blue-ex.com" target="_blank">ask@blue-ex.com</a></div>
                    </div>
                </div>
                <Link href="/profile"><div className={styles.button}> <img src="../images/profile-4.png"/> <span>Profile</span></div></Link>
                <div onClick={logout} className={styles.button}><img src="../images/logout-1.png"/><span>Logout</span></div>
            </div>
        </div>
     );
}
 
export default ProfileBox;

ProfileBox.getInitialProps = ({ req, res }) => {
    const cookies = new Cookies(req, res)
}
