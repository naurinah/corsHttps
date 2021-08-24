import styles from "./CodShipment.module.css"
import Switch from '@material-ui/core/Switch';
import { useState } from "react";

const CodShipment = () => {
    const [change, setChange] = useState(true);
    const [display, setDisplay] = useState('none');

    const handleDisplay = () => {
      setDisplay(display === 'none' ? 'flex': 'none');
      console.log(display)
    }

    const handleChange = (event) => {
        setChange( event.target.checked );
      };

    return ( 
        <div className={styles.servicesCard}>
            <div className={styles.col}>
                <div className={styles.left}>
                    <img style={{objectFit: "contain"}} src="/cod.png" alt="cod"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightLeft}>
                        <h2>Insurance Scheme for COD Shipments</h2>
                        <p><b>Dear Customer,</b>
                            <br/></p>
                            <p>We are pleased to inform you that for the safety and security of your consignments we have arranged the insurance coverage.</p>
                            <p>Therefore, please find enclosed the insurance scheme for your information and action. If you wish to obtain insurance cover then please specify the same on each CN (Consignment Note) from now on where insured value is required to be filled by the Customer.</p>
                            <p>In case you need any further information please contact with Mr. Ali Taha (Finance Controller) on telephone No. 34327911 -14.</p>
                            <p>Thanking you!</p>
                            <button onClick={handleDisplay}>View Details</button>
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
            <div className={styles.col2} style={{display: display}}>
                <div className={styles.top}>
                    <h2>Scheme for Regular Customers</h2>
                    <div className={styles.table}>
                      <div className={styles.row}>
                        <div className={styles.one}><b>NO#</b></div>
                        <div className={styles.two}><b>ON COD AMOUNT</b></div>
                        <div className={styles.three}><b>PREMIUM RATE</b></div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.one}>1-</div>
                        <div className={styles.two}>With NIL COD Value</div>
                        <div className={styles.three}>Rs.30 Fixed charges (claim settlement to the Maximum value of Rs 2,000/-)</div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.one}>2-</div>
                        <div className={styles.two}>Rs. 01 TO Rs. 2,000</div>
                        <div className={styles.three}>Rs. 30 Fixed charges</div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.one}>3-</div>
                        <div className={styles.two}>Rs. 2,001 TO Rs. 10,000</div>
                        <div className={styles.three}>1.50% of COD amount</div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.one}>4-</div>
                        <div className={styles.two}>Over Rs. 10,000</div>
                        <div className={styles.three}>2.00% of COD amount</div>
                      </div>
                      
                    </div>
                </div>
            </div>
            <div className={styles.col2} style={{display: display}}>
                <div className={styles.top}>
                    <h2>Scheme for Regular Customers</h2>
                    <p>3% on the declared value on the Consignment Note.</p>
                </div>
            </div>
        </div>
     );
}
 
export default CodShipment;