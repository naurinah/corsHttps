import styles from "./ProfileCard.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

const ProfileCard = () => {
    const [show, setShow] = useState('password');

    const handlePassword = () => {
        setShow(show === 'text' ? 'password' : 'text');
        console.log(show)
    }

    return ( 
        <div className={styles.profileCard}>
            <div className={styles.top}>
                <h2>Profile Detail</h2>
            </div>
            <div className={styles.data}>
                <form>
                    <div className={styles.field}>
                        <div className={styles.label}>Account:</div>
                        <input type="text" className={styles.input} value="KHI-06366" disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Account Title:</div>
                        <input type="text" className={styles.input} value="EASY STORE PAKISTAN" disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Name:</div>
                        <input type="text" className={styles.input} value="Nice Store" disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Address:</div>
                        <input className={styles.input} value="Shop no. 4032 4th Floor Central Plaza hassan mohani road opposite Gul plaza." disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Cell:</div>
                        <input className={styles.input} value="03008010103" disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Email:</div>
                        <input className={styles.input} value="info@nicestore.pk" disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>NTN:</div>
                        <input className={styles.input} value="Please contact  Customer Services to update your NTN." disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>CNIC:</div>
                        <input className={styles.input} value="Please contact  Customer Services to update your CNIC." disabled />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Password:</div>
                        <div className={styles.input}>
                            <div className={styles.password}>
                                <input type={show} placeholder="Password" />
                                {show === 'password' && <VisibilityIcon style={{position: "absolute", right: "1rem", top: "1.8rem", color: "#91899f"}} onClick={handlePassword} />}
                                {show === 'text' && <VisibilityOffIcon style={{position: "absolute", right: "1rem", top: "1.8rem", color: "#91899f"}} onClick={handlePassword} />}
                            </div>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}></div>
                        <div className={styles.input}>
                            <p>
                            Changing your portal password will require you to use the new password for APIs as well. Make sure your development team are aware of this change if you are consuming blueEX APIs.
                            </p>
                            <button>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ProfileCard;