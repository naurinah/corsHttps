import styles from "../../styles/faqs.module.css"
import Header from "../../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import PlaceOrder from "../../components/OpenApiCard/PlaceOrder";
import { useEffect, useState } from "react";
import CancelOrder from "../../components/OpenApiCard/CancelOrder";
import GetTraiff from "../../components/OpenApiCard/GetTraiff";

const OpenApi = () => {
    const [faqComp, setFaqComp] = useState("placeOrder");

    useEffect(()=>{
        let active = document.querySelector(`#${faqComp}`);
        active.classList.add(styles.active)
        console.log(faqComp)

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
                        <h3 className={styles.heading}>OPEN API</h3>
                        <div className={styles.faqCard}>
                                <div className={styles.top}>
                                    <h2>OPEN API Detail</h2>
                                    <a href="/BLX-XML-API.postman_collection.json" download><button>Download Postman</button></a>
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.menu}>
                                        <ul>
                                            <li id="placeOrder" onClick={()=>setFaqComp("placeOrder")}>Place Order</li>
                                            <li id="cancelOrder" onClick={()=>setFaqComp("cancelOrder")}>Cancel Order</li>
                                            <li id="getTraiff" onClick={()=>setFaqComp("getTraiff")}>Get Traiff</li>
                                            <li id="getCities" onClick={()=>setFaqComp("getCities")}>Get Cities</li>
                                            <li id="tracking" onClick={()=>setFaqComp("tracking")}>Tracking</li>
                                            <li id="status" onClick={()=>setFaqComp("status")}>Status</li>
                                        </ul>
                                    </div>
                                    <div className={styles.accordion}>
                                        {faqComp === "placeOrder" && <PlaceOrder />}
                                        {faqComp === "cancelOrder" && <CancelOrder />}
                                        {faqComp === "getTraiff" && <GetTraiff />}
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
 
export default OpenApi;