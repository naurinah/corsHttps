import styles from "./ServicesCard.module.css"
import Switch from '@material-ui/core/Switch';
import { useState } from "react";
import CodTable from "../CodTable/CodTable"

const ServicesCard = () => {
    const [change, setChange] = useState(true);

    const handleChange = (event) => {
        setChange( event.target.checked );
      };

    return ( 
        <div className={styles.servicesCard}>
            <div className={styles.col}>
                <div className={styles.left}>
                    <img src="/cod.png" alt="cod"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightLeft}>
                        <h2>Cash On Delivery (COD)</h2>
                        <p>blueEX's tried & trusted next day delivery
                            service across Pakistan with a fortnightly settlement cycle.</p>
                    </div>
                    <div className={styles.rightRight}>
                        <Switch
                            checked={change}
                            onChange={handleChange}
                            color="primary"
                            name="change"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.col2}>
                <div className={styles.top}>
                    <h2>Tariff Rates</h2>
                    <p>A list of all the tariff rates for the locations you ship to. 14% GST applicable on as per law.</p>
                    <CodTable />
                </div>
            </div>
        </div>
     );
}
 
export default ServicesCard;