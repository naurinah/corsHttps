import PickupListTable from "../PickupListTable/PickupListTable"
import styles from "./PickupListcard.module.css"

const PickupListCard = () => {
    return ( 
        <div className={styles.pickupListCard}>
            <div className={styles.top}>
                <h2>PICKUP LIST</h2>
            </div>
            <div className={styles.shipment}>
                
                <div className={styles.table}>
                    <PickupListTable/>
                </div>
            </div>
        </div>
     );
}
 
export default PickupListCard;