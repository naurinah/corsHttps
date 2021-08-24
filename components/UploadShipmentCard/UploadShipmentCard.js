import styles from "./UploadShipmentCard.module.css"

const UploadShipmentCard = () => {
    return ( 
        <div className={styles.upload}>
            <div className={styles.top}>
                <h2>UPLOAD SHIPMENTS</h2>
            </div>
            <div className={styles.data}>
                <div className={styles.left}>
                    <form action="">
                        <div className={styles.shipform}>
                            <label for="upload">Booking Upload</label>
                            <input id="upload" type="File"/>
                        </div>
                        <div className={styles.shipform}>
                            <label for="service">Service Code</label>
                            <select name="service" id="service">
                                <option value="">BLUE EDGE</option>
                            </select>
                        </div>
                        <div className={styles.shipform}>
                            <label for="fragile">Fragile</label>
                            <select name="fragile" id="fragile">
                                <option value="">No</option>
                                <option value="">Yes</option>
                            </select>
                        </div>
                        <div className={styles.shipform}>
                            <label for="city">Origin City</label>
                            <select name="city" id="city">
                                <option value="">Karachi</option>
                            </select>
                        </div>
                        <div className={styles.shipform}>
                            <label for="city">Pickup Location</label>
                            <select name="city" id="city">
                                <option value="">Default Pickup Location</option>
                            </select>
                        </div>
                        <div className={styles.pickup}>
                            <button>Add Pickup Location</button>
                        </div>
                        <div className={styles.uploadButton}>
                            <button>Upload Shipments</button>
                        </div>
                    </form>
                </div>
                <div className={styles.right}>
                    <p>Uploading Format Information:</p>
                    <ul>
                        <li>Upload the 'xls' Format File !</li>
                        <li>Download Your Uploading File Format Here!
                            <br/><a href="/upload.xls" target="_blank" >Click Here to Download!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default UploadShipmentCard;