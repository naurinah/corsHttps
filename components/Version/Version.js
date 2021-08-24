import styles from "./Version.module.css"

const Version = ({ heading, children }) => {
    return ( 
        <div className={styles.version}>
            <div className={styles.top}>
                <h2>{ heading }</h2>
            </div>
            <div className={styles.data}>
                { children }
            </div>
        </div>
     );
}
 
export default Version;