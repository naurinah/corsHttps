import styles from "../styles/pickup-locations.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";


const CreatePickup = () => {
    return ( 
        <div className={styles.pickupLocation}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="public/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                    <h3 className={styles.heading}>Create Pickup</h3>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default CreatePickup;