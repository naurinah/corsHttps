import styles from "./UserListCard.module.css"
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from "react";

const UserListCard = () => {
    const [display, setDisplay] = useState('none')

    return ( 
        <div className={styles.version}>
            <div className={styles.top}>
                <h2>User List</h2>
                <button onClick={()=>setDisplay('block')}><AddIcon/> Add Team User</button>
            </div>
            <div style={{display: display}} className={styles.addUser}>
                <div className={styles.top}>
                    <h2>Add User</h2> 
                    <button onClick={()=>setDisplay('none')}><ClearIcon/></button>
                </div>
                <div className={styles.body}>
                    <form action="">
                        <div className={`${styles.row} ${styles.topRow}`}>
                            <div className={styles.col}>
                                <label htmlFor="name">Name:</label>
                                <input id="name" type="text" placeholder="Enter Your Name" />
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="username">Username:</label>
                                <input id="username" type="text" placeholder="Enter Your Username" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="contact">Contact:</label>
                                <input id="contact" type="number" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="email">Email:</label>
                                <input id="email" type="text" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="role">User Role</label>
                                <select id="role">
                                    <option value="">Editor</option>
                                    <option value="">Administrator</option>
                                </select>
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" placeholder="Enter Your Password" />
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.buttonRow}`}>
                            <button>Add User</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.info}><b>Info!</b> No User Found!</div>
            </div>
        </div>
     );
}
 
export default UserListCard;