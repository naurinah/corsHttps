import styles from "./PickupCard.module.css"

const PickupCard = () => {
    return ( 
        <div className={styles.pickupCard}>
            <div className={styles.top}>
                <h2>Pickup Location List</h2>
            </div>
            <div className={styles.data}>
                
            </div>
        </div>
     );
}
 
export default PickupCard;