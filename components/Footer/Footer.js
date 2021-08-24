import Link from 'next/link'
import styles from "./Footer.module.css"

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <ul className={styles.ul}>
               <Link href="/about"><li>About</li></Link> 
               <Link href="/privacy-policy"><li>Privacy Policy</li></Link> 
               <Link href="/terms-conditions"><li>T&C</li></Link> 
               
            </ul>
            <div className={styles.copy}>
                Copyright 2021 © Powered by <a href="https://www.blue-ex.com/" target="_blank">blueEX</a>.
               </div>
        </footer>
     );
}
 
export default Footer;