import styles from "../styles/developer-center.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import CodShipment from "../components/CodShipment/CodShipment";

const Services = () => {
    return ( 
        <div className={styles.services}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Services</h3>
                        <ServicesCard />
                        <CodShipment />
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default Services;