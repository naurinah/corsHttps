import styles from "./DeliveryListCard.module.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeliveryTable from '../DeliveryTable/DeliveryTable'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { useRef, useState } from 'react';
import dsty from "../../styles/dateRange.module.css"
import useVisible from "../../hooks/useVisible"

const DeliveryListCard = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);


    const [dateDisplay, setDateDisplay] = useState("none")

    const handleDateDisplay = () => {
        setDateDisplay(dateDisplay === "none" ? "block" : "none")
    }
      
    const ref = useRef();
    
    useVisible(ref, () => {
        setDateDisplay("none")
    });

    return ( 
        <div className={styles.deliveryListCard}>
            <div className={styles.top}>
                <h2>Delivery List</h2>
                <div className={styles.topRight} ref={ref} onClick={handleDateDisplay}>
                    <span className={styles.day}>Last 30 Days</span>
                    <span className={styles.date}>Feb 2 - Mar 3</span>
                    <button><KeyboardArrowDownIcon/></button>
                </div>
            </div>
            <div className={dsty.dataRange} style={{display: dateDisplay}}>
                <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                />;
            </div>
            <div className={styles.shipment}>
                
                <div className={styles.table}>
                    <DeliveryTable/>
                </div>
            </div>
        </div>
     );
}
 
export default DeliveryListCard;