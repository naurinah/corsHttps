import styles from "./AboutCard.module.css"

const AboutCard = () => {
    return ( 
        <div className={styles.aboutCard}>
            <div className={styles.data}>
            blueEX Booking App is the new app from blueEX that lets you create and manage your Cash On Delivery shipments. To see our new list of features, please review our Starter Guide. To find out more about blueEX visit our website <a href="https://www.blue-ex.com" target="_blank">www.blue-ex.com</a>
            </div>
        </div>
     );
}
 
export default AboutCard;