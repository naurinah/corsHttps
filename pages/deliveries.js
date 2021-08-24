import styles from "../styles/deliveries.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import DeliveryListCard from "../components/DeliveryListCard/DeliveryListCard";
import FareModal from "../components/FareModal/FareModal";

const Deliveries = () => {
    return ( 
        <div className={styles.deliveries}>
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
                            <h3 className={styles.heading}>Deliveries</h3>
                            <div className={styles.buttons}>
                                <FareModal/>
                                <Link href="/upload-booking"><button>Bulk Import</button></Link>
                            </div>
                        </div>
                        <DeliveryListCard/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default Deliveries;