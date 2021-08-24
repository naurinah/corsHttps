import styles from "./ApiDetail.module.css"
import Link from 'next/link'

const ApiDetail = () => {
    return ( 
        <div className={styles.apiDetail}>
            <div className={styles.top}>
                <h2>API Detail</h2>    
            </div>
            <div className={styles.shipment}>
                   <Link href="/developer-center/open-api-xml">
                        <div className={styles.card}>
                            <img src="/openapixml.png" alt=""/>
                        </div>
                   </Link>
                   <Link href="/developer-center">
                        <div className={styles.card}>
                            <img src="/openapijson.png" alt=""/>
                        </div>
                   </Link>
                   <Link href="/developer-center">
                        <div className={styles.card}>
                            <img src="/webx.png" alt=""/>
                        </div>
                   </Link>
                   
                        <div className={`${styles.card} ${styles.disabled}`}>
                            <img src="/fishry.png" alt=""/>
                        </div>
                   
                   <Link href="/developer-center">
                        <div className={styles.card}>
                            <img src="/magento.png" alt=""/>
                        </div>
                   </Link>
                   <Link href="/developer-center">
                        <div className={styles.card}>
                            <img src="/woocommerce.png" alt=""/>
                        </div>
                   </Link>
                   
                        <div className={`${styles.card} ${styles.disabled}`}>
                            <img src="/prestashop.png" alt=""/>
                        </div>
                   
                   
                        <div className={`${styles.card} ${styles.disabled}`}>
                            <img src="/shopify.png" alt=""/>
                        </div>
                   
                   
                        <div className={`${styles.card} ${styles.disabled}`}>
                            <img src="/chatbot.png" alt=""/>
                        </div>
                   
            </div>
            
        </div>
     );
}
 
export default ApiDetail;