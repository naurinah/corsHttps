import styles from "../styles/release-notes.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Version from "../components/Version/Version";

const ReleaseNotes = () => {
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
                        <h3 className={styles.heading}>Release Notes</h3>
                        <Version heading="Version 0.3.1">
                            <p>Bugs Fixed</p>
                            <ul>
                                <li>Deliveries: Return status shipments are not shown as In-Transit on the shipment detail view.</li>
                                <li>Deliveries: Calculate fare button is now showing accurate fares.</li>
                                <li>Deliveries: Changes made to column visibility by clicking the column visibility button are now persistent.</li>
                                <li>Statements: Account Statement date is now corrected</li>
                                <li>Statements: Duplicate statements are not being shown with Amount "0"</li>
                                <li>Create Shipment: Placeholder text on Create Shipment page shows examples that are corect against wieght and product value fields</li>
                                <li>Create Shipment: Total charges are now set to zero when CN is generated and Print CN button is clicked</li>
                                <li>Dashboard: Statement circles have now been set to green if cheque has been created and red if cheque has not been created</li>
                                <li>Create Shipment: blueEX services are now visible in services dropdown</li>
                                <li>Create Shipment: form validation is now working correctly</li>
                                <li>Create Shipment: tab index is now working correctly</li>
                                <li>Create Shipment: alert/notification text changed for invalid data in the weight field</li>
                            </ul>
                            <p>New Features</p>
                            <ul>
                                <li>Guides: Two new video guides added for viewing delivery data on the delivery page</li>
                                <li>Developer Center: New integration plugin and documentation for Magento</li>
                                <li>Developer Center: New integration documentation for WebX</li>
                                <li>Developer Center: Improved integration plugin for WooCommerce</li>
                                <li>Developer Center: Updated documentation for WooCommerce</li>
                                <li>Deliveries: New Data table view with improvements in speed and functionality</li>
                                <li>Deliveries: Improved search functionality</li>
                                <li>Deliveries: Shipments can now be exported to Excel or CSV</li>
                                <li>Deliveries: Shipment data can now be copied for pasting to excel or other applications</li>
                                <li>Dashboard: User can now view status report by clicking on the progress bar text below individual status progress bars</li>
                                <li>Dashboard: Minor presentation changes in the settlement area</li>
                                <li>Dashboard: Minor changes to UI in individual card headings and background color</li>
                                <li>Dashboard: Date filter has been added to the account summary</li>
                                <li>Dashboard: View all link has been added on the shipments created graph</li>
                                <li>Application: Session duration has been increased for ease of use</li>
                            </ul>
                            <p>Known Issues</p>
                            <ul>
                                <li>Deliveries: Selecting the date range control on the deliveries page re-sets any status or search input by the user.</li>
                            </ul>
                        </Version>
                        <Version heading="Version 0.3.0">
                            <p>Bugs Fixed</p>
                            <ul>
                                <li>Statements: Account Statement date is now correcte</li>
                                <li>Statements: Duplicate statements are not being shown with Amount "0"</li>
                                <li>Create Shipment: Placeholder text on Create Shipment page shows examples that are corect against wieght and product value fields</li>
                                <li>Create Shipment:Total charges are now set to zero when CN is generated and Print CN button is clicked</li>
                                <li>Dashboard: Statement circles have now been set to green if cheque has been created and red if cheque has not been created</li>
                                <li>Create Shipment: blueEX services are now visible in services dropdown</li>
                                <li>Create Shipment: form validation is now working correctly</li>
                                <li>Create Shipment: tab index is now working correctlyCreate Shipment: alert/notification text changed for invalid data in the weight field</li>
                                <li></li>
                            </ul>
                            <p>New Features</p>
                            <ul>
                                <li>Create Shipment: User can now use CTRL-V to past into the shipment creation form</li>
                                <li>Profile: Option to edit fields other than Customer contact information has been removed</li>
                                <li>Dashboard: Bulk shipment option has been moved to quick links in the application header</li>
                                <li>Create Shipment: the destination country has been set to Pakistan as default</li>
                                <li>Login: Help text for forget password has been added</li>
                                <li>Release History: New page to maintain release history</li>
                                <li>Guides: New video guides added for creating shipments and viewing deliveries</li>
                                <li>Application: Session duration has been increased for ease of use</li>
                            </ul>
                            <p>Known Issues</p>
                            <ul>
                                <li>Deliveries: The Customize button above the table does not save the user's column preference on page refresh.</li>
                                <li>Deliveries: Selecting the date range control on the deliveries page re-sets any status or search input by the user.</li>
                                <li>Deliveries: Calculate fare button is not showing accurate fares.</li>
                            </ul>
                        </Version>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default ReleaseNotes;