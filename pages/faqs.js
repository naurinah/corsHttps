import styles from "../styles/faqs.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import GeneralFaq from "../components/Faqs/GeneralFaq";
import BookingApp from "../components/Faqs/BookingApp";
import Account from "../components/Faqs/Account";
import Damage from "../components/Faqs/Damage";
import Other from "../components/Faqs/Other";
import Return from "../components/Faqs/Return";
import Shipment from "../components/Faqs/Shipment";
import Tracking from "../components/Faqs/Tracking";
import { useEffect, useState } from "react";

const Faqs = () => {
    const [faqComp, setFaqComp] = useState("general");

    useEffect(()=>{
        let active = document.querySelector(`#${faqComp}`);
        active.classList.add(styles.active)

        return ( ()=>{
            active.classList.remove(styles.active)
         });
    }, [faqComp])

    return ( 
        <div className={styles.faqs}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Knowledge Base</h3>
                        <div className={styles.faqCard}>
                                <div className={styles.top}>
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.menu}>
                                        <ul>
                                            <li id="general" onClick={()=>setFaqComp("general")}>General</li>
                                            <li id="booking" onClick={()=>setFaqComp("booking")}>Using the new booking app</li>
                                            <li id="account" onClick={()=>setFaqComp("account")}>Account opening and settlement</li>
                                            <li id="shipment" onClick={()=>setFaqComp("shipment")}>Creating a new shipment and getting it picked up</li>
                                            <li id="tracking" onClick={()=>setFaqComp("tracking")}>Tracking a shipment</li>
                                            <li id="returns" onClick={()=>setFaqComp("returns")}>Shipping returns and refusals</li>
                                            <li id="damage" onClick={()=>setFaqComp("damage")}>Damage claims and insurance</li>
                                            <li id="other" onClick={()=>setFaqComp("other")}>Other services</li>
                                        </ul>
                                    </div>
                                    <div className={styles.accordion}>
                                        {faqComp === "general" && <GeneralFaq/>}
                                        {faqComp === "booking" && <BookingApp/>}
                                        {faqComp === "account" && <Account/>}
                                        {faqComp === "shipment" && <Shipment/>}
                                        {faqComp === "tracking" && <Tracking/>}
                                        {faqComp === "returns" && <Return/>}
                                        {faqComp === "damage" && <Damage/>}
                                        {faqComp === "other" && <Other/>}
                                    </div>
                                </div>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default Faqs;