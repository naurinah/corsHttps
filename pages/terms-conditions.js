import styles from "../styles/release-notes.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import TermsCard from "../components/TermsCard/TermsCard";

const TermsConditions = () => {
    return ( 
        <div className={styles.release}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Terms & Conditions</h3>
                        <TermsCard/>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default TermsConditions;