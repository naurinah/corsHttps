import styles from "../../styles/developer-center.module.css"
import Header from "../../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import ApiDetail from "../../components/ApiDetail/ApiDetail";

const DeveloperCenter = () => {
    return ( 
        <div className={styles.developerCenter}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>   
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Developer Center</h3>
                        <ApiDetail/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default DeveloperCenter;