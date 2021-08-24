import styles from "./CustomerDetails.module.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import { useState, useEffect } from "react";
import { SportsHandballRounded } from "@material-ui/icons";
import useCountries from "../../hooks/useCountries";
import useCities from "../../hooks/useCities";

const CustomerDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("PK");
  const [selectedCity, setSelectedCity] = useState("KHI");
  const country = useCountries();
  const city = useCities(selectedCountry);
  const originCity = useCities("PK");

  const [prodValue, setProdValue] = useState("");
  const [saleDiscount, setSaleDiscount] = useState("");
  const [conName, setConName] = useState("");
  const [conAdd, setConAdd] = useState("");
  const [conCont, setConCont] = useState("");
  const [conMail, setConMail] = useState("");
  const [cbc, setCbc] = useState("Y");
  const [origCity, setOrigCity] = useState("KHI");
  const [destCountry, setDestCountry] = useState("");
  const [destCity, setDestCity] = useState("");
  const [insur, setInsur] = useState("N");
  const [coment, setComent] = useState("");
  const [prodDetail, setProdDetail] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [ptype, setPtype] = useState("N");
  const [pcs, setPcs] = useState("");
  const [wgt, setWgt] = useState("");
  const [fragile, setFragile] = useState("N");
  const [custRef, setCustRef] = useState("");
  const [shpName, setShpName] = useState("");
  const [shpAdd, setShpAdd] = useState("");
  const [shpCont, setShpCont] = useState("");
  const [shpMail, setShpMail] = useState("");
  const [storeId, setStoreId] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [insurValue, setInsurValue] = useState("");
  const [acno, setAcno] = useState("KHI-00114");
  const [status, setStatus] = useState("Save");
  const [message, setMessage] = useState("success");
  const [cnno, setCnno] = useState("5014619681");

  const [cbcChecked, setCbcChecked] = useState(false);
  const toggleCbc = () => {
    if (cbcChecked) {
      setCbc("N");
    } else {
      setCbc("Y");
    }
    setCbcChecked((prev) => !prev);
  };

  const [fragileChecked, setFragileChecked] = useState(false);
  const toggleFragile = () => {
    if (fragileChecked) {
      setFragileChecked(false);
      setFragile("N");
    } else {
      setFragileChecked(true);
      setFragile("Y");
    }
  };

  const [insurChecked, setInsurChecked] = useState(false);
  const toggleInsur = () => {
    if (insurChecked) {
      setInsurChecked(false);
      setInsur("N");
    } else {
      setInsurChecked(true);
      setInsur("Y");
    }
  };

  const handlePtype = (e) => {
    setPtype(e.target.value);
  };

  const handleShipment = (e) => {
    e.preventDefault();
    console.log(`prod Value = ${prodValue}`);
    console.log(`prod Value = ${prodValue}`);
  };

  return (
    <div className={styles.customerDetails}>
      <form onSubmit={handleShipment} action="">
        <div className={styles.col}>
          {/* Customer Details */}
          <div className={styles.details}>
            <div className={styles.top}>
              <h2>Customer Details</h2>
            </div>
            <div className={styles.data}>
              <div className={styles.row}>
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  value={conName}
                  onChange={(e) => setConName(e.target.value)}
                  type="text"
                  id="fullName"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="address">
                  Address <span>*</span>
                </label>
                <input
                  value={conAdd}
                  onChange={(e) => setConAdd(e.target.value)}
                  type="text"
                  id="address"
                  placeholder="Enter your Address"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="email">Email</label>
                <input
                  value={conMail}
                  onChange={(e) => setConMail(e.target.value)}
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="phone">
                  Phone <span>*</span>
                </label>
                <input
                  value={conCont}
                  onChange={(e) => setConCont(e.target.value)}
                  type="text"
                  id="phone"
                  placeholder="Enter your Phone"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="country">
                  Destination Country <span>*</span>
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  name="country"
                  id="country"
                >
                  {country &&
                    country.map((c) => (
                      <option value={c.country_code}>{c.country_name}</option>
                    ))}
                </select>
              </div>
              <div className={styles.row}>
                <label htmlFor="city">
                  Destination City <span>*</span>
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  name="city"
                  id="city"
                >
                  {city &&
                    city.map((c) => (
                      <option value={c.CITY_CODE}>{c.CITY_NAME}</option>
                    ))}
                </select>
              </div>
              <div className={styles.row}>
                <label htmlFor="service">
                  Service <span>*</span>
                </label>
                <select
                  value="BE"
                  onChange={(e) => setServiceCode(e.target.value)}
                  name="service"
                  id="service"
                >
                  <option value="BE">BLUE EDGE</option>
                </select>
              </div>
            </div>
          </div>
          {/* Shipper Details */}
          <div className={styles.details}>
            <div className={styles.top}>
              <h2>Shipper Details</h2>
            </div>
            <div className={styles.data}>
              <div className={styles.row}>
                <label htmlFor="originCity">
                  Origin City <span>*</span>
                </label>
                <select
                  value={origCity}
                  onChange={(e) => setOrigCity(e.target.value)}
                  name="originCity"
                  id="originCity"
                >
                  {originCity &&
                    originCity.map((c) => (
                      <option value={c.CITY_CODE}>{c.CITY_NAME}</option>
                    ))}
                </select>
              </div>
              <div className={styles.row}>
                <label htmlFor="pickup">Pickup Location</label>
                <select name="pickup" id="pickup">
                  <option value="">Default Pickup Location</option>
                </select>
              </div>
              <div className={`${styles.row} ${styles.pickup}`}>
                <button>Add Pickup Location</button>
              </div>
            </div>
          </div>
          {/* Shipment Details */}
          <div className={styles.details}>
            <div className={styles.top}>
              <h2>Shipment Details</h2>
            </div>
            <div className={styles.data}>
              <div className={styles.row}>
                <label htmlFor="productName">
                  Product Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="productName"
                  placeholder="Blue T-shirt"
                  value={prodDetail}
                  onChange={(e) => setProdDetail(e.target.value)}
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="pieces">
                  Pieces <span>*</span>
                </label>
                <input
                  type="number"
                  id="pieces"
                  placeholder="1"
                  value={pcs}
                  onChange={(e) => setPcs(e.target.value)}
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="weight">
                  Weight (KG) <span>*</span>
                </label>
                <input
                  type="number"
                  id="weight"
                  placeholder="0.5"
                  value={wgt}
                  onChange={(e) => setWgt(e.target.value)}
                />
              </div>
              <div className={styles.row}>
                <label htmlFor=""></label>
                <p className={styles.input}>
                  NOTE: This is not the final weight. Subject to the
                  confirmation at Blue-Ex Operations.
                </p>
              </div>
              <div className={styles.row}>
                <label htmlFor="value">
                  Product Value (Rs.) <span>*</span>
                </label>
                <input
                  value={prodValue}
                  onChange={(e) => setProdValue(e.target.value)}
                  type="number"
                  id="value"
                  placeholder="1500"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="ref">Product Ref</label>
                <input
                  value={custRef}
                  onChange={(e) => setCustRef(e.target.value)}
                  type="text"
                  id="ref"
                  placeholder="S-90091"
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="service">Remarks </label>
                <textarea
                  name="service"
                  id="service"
                  cols="30"
                  rows="3"
                  placeholder="This is exchange product, size Medium"
                  value={coment}
                  onChange={(e) => setComent(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.colwithbutton}>
          <div className={styles.col2}>
            {/* Shipment Options */}
            <div className={styles.details}>
              <div className={styles.top}>
                <h2>Shipment Options</h2>
              </div>
              <div className={styles.services}>
                <div className={styles.text}>Services *</div>
                <div className={styles.cod}>COD</div>
              </div>
              <div className={styles.parcel}>
                <div className={styles.select}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="document"
                      name="document"
                      value={ptype}
                      onChange={handlePtype}
                    >
                      <FormControlLabel
                        value="D"
                        control={<Radio color="primary" />}
                        label="Document"
                      />
                      <FormControlLabel
                        value="N"
                        control={<Radio color="primary" />}
                        label="Parcel"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={styles.collection}>
                  <div className={styles.cash}>
                    <div className={styles.text}>Cash Collection</div>
                    <div className={styles.switch}>
                      <Switch
                        checked={cbcChecked}
                        onClick={toggleCbc}
                        color="primary"
                        name="cbc"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </div>
                  </div>
                  {cbcChecked && (
                    <p>
                      Product Value can not be Rs. if Cash Collection is turned
                      on.
                    </p>
                  )}
                </div>
                <div className={styles.collection}>
                  <div className={styles.cash}>
                    <div className={styles.text}>Fragile</div>
                    <div className={styles.switch}>
                      <Switch
                        color="primary"
                        name="checkedB"
                        inputProps={{ "aria-label": "primary checkbox" }}
                        checked={fragileChecked}
                        onClick={toggleFragile}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.collection}>
                  <div className={styles.cash}>
                    <div className={styles.text}>Insurance</div>
                    <div className={styles.switch}>
                      <Switch
                        color="primary"
                        name="checkedB"
                        inputProps={{ "aria-label": "primary checkbox" }}
                        checked={insurChecked}
                        onClick={toggleInsur}
                      />
                    </div>
                  </div>
                  {insurChecked && (
                    <input
                      type="text"
                      value={insurValue}
                      onChange={(e) => setInsurValue(e.target.value)}
                      placeholder="Insurance Value"
                    />
                  )}
                </div>
              </div>
              <div className={styles.rs}>
                <div className={styles.collection}>
                  <div className={styles.cash}>
                    <div className={styles.text}>
                      <b>Cash Collection</b>
                    </div>
                    <div className={styles.switch}>Rs. {prodValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.book}>BOOK NOW</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;
