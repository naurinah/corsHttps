import styles from "../styles/pickup-locations.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import PickupCard from "../components/PickupCard/PickupCard";

const PickupLocations = () => {
    return ( 
        <div className={styles.pickupLocation}>
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
                            <h3 className={styles.heading}>Pickup Loations</h3>
                            <button>Add Pickup Location</button>
                        </div>
                        <PickupCard/>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
    );
}
 
export default PickupLocations;