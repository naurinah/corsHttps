import styles from "../styles/guides.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import GuideCard from "../components/GuideCard/GuideCard";

const Guides = () => {
    return ( 
        <div className={styles.guides}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Video Guides</h3>
                        <GuideCard heading="Starter Guide" image="/starter-guide.png" text="Download the PDF Starter Guide for a complete overview of the new blueEX Booking App with detailed description of many new and improved features." />
                        <GuideCard heading="Create a Re-attempt Request" image="/return-request.jpg" text="How to request BlueEX to re-attempt delivery on a shipment." />
                        <GuideCard heading="Approve a Return Request" image="/return-request.jpg" text="How to approve a shipment to be returned back to address of origin." />
                        <GuideCard heading="View Return Summary" image="/return-summary.jpg" text="View list of shipments that have been returned after your approval (or due to no reply for 24 hours)." />
                        <GuideCard heading="Create Shipment" image="/create.png" text="View the video screencast of a user booking a new shipment." />
                        <GuideCard heading="Add a new pickup location" image="/pickup.png" text="View video screen-cast of a user adding a new pickup location while booking a shipment." />
                        <GuideCard heading="Validation errors" image="/validation.png" text="View video screen-cast of different validation errors a user can face while booking a shipment." />
                        <GuideCard heading="Viewing shipment data" image="/deliveries.png" text="View video screen-cast of a user viewing and filtering data on the deliveries page." />
                        <GuideCard heading="Viewing account statements" image="/statements.png" text="View video screen-cast of a user viewing account statements on the statements page." />
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default Guides;