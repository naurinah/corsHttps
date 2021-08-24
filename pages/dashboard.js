import Header from "../components/Header/Header";
import Head from 'next/head'
import styles from "../styles/Dashboard.module.css"
import Sidebar from "../components/Sidebar/Sidebar";
import Note from "../components/Note/Note";
import Footer from "../components/Footer/Footer";
import SummaryCard from "../components/SummaryCard/SummaryCard";
import SettlementCard from "../components/SettlementCard/SettlementCard";
import ShipmentCard from "../components/ShipmentCard/ShipmentCard";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import useSWR from 'swr'
import { parseCookies } from "../helpers/"
import { useCookies } from "react-cookie"




const Dashboard = () => {
    const [cookie, setCookie] = useCookies(["user"])
    
    const [{acno}, dispatch] = useStateValue();
    

    return ( 
        <div className={styles.dashboard}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <Note text="Dear Customer, please note that BlueEX's return procedure will shift from Emails to New Customer Portal from 1st January 2021. Please make sure you visit the BlueEX Video Guides page to view how to use the Return Request Page. For more information please contact your account manager or BlueEX Customer Support at 021-111-258-339." 
                        />
                        <h3 className={styles.heading}>Dashboard - admin</h3>
                        <div className={styles.cardRow}>
                            <SummaryCard className={styles.summary} />
                            <SettlementCard className={styles.settlement} />
                        </div>
                        <div className={styles.cardRow}>
                            <ShipmentCard />
                        </div>
                    </main>
                    <Footer />
                </div>
                
            </div>
            
        </div>
     );
}

Dashboard.getInitialProps = async ({ req, res })=> {
    const data = parseCookies(req)
  
  if (res) {
      if (Object(data).user === "undefined" && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }
  
    return {
      data: data && data,
    }
  }
 
export default Dashboard;

