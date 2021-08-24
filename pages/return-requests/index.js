import styles from "../../styles/return.module.css"
import Header from "../../components/Header/Header";
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import DeliveryListCard from "../../components/DeliveryListCard/DeliveryListCard";
import InboxIcon from '@material-ui/icons/Inbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CachedIcon from '@material-ui/icons/Cached';

const ReturnRequests = () => {
    return ( 
        <div className={styles.return}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <div className={styles.head}>
                            <div className={styles.inTransit}>
                                IN-TRANSIT
                            </div>
                            <h3 className={styles.heading}>Shipments with Return Requests</h3>
                        </div>
                        <div className={styles.requestButtons}>
                            <Link href="/return-requests">
                                <div className={`${styles.button} ${styles.selected}`}><InboxIcon className={styles.icon} /> RETURN REQUESTS</div>
                            </Link>
                            <Link href="/return-requests">
                                <div className={styles.button}><CheckBoxIcon className={styles.icon} /> RETURNED</div>
                            </Link>
                            <Link href="/return-requests">
                                <div className={styles.button}><CachedIcon className={styles.icon} /> REATTEMPT REQUESTS</div>
                            </Link>
                            <Link href="/return-requests">
                                <div className={styles.button}><CachedIcon className={styles.icon} /> RETURN SUMMARY</div>
                            </Link>
                        </div>
                        <DeliveryListCard/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default ReturnRequests;