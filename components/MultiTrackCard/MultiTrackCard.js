import FormData from "form-data";
import { useState } from "react";
import MultiTrackBox from "../MultiTrackBox/MultiTrackBox";
import styles from "./MultiTrackCard.module.css";

const MultiTrackCard = () => {
  const [cnno, setCnno] = useState("");
  const [result, setResult] = useState(null);

  const handleCnno = (e) => {
    setCnno(e.target.value);
  };

  const fetchMultitrack = async (no) => {
    var formdata = new FormData();
    formdata.append(
      "request",
      '{"user":"tracking.user","password":"1e34a1a1f2386e28bd4c4bf920cd8653","ShipmentNumbers":['+ no +']}'
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://benefitx.blue-ex.com/api/customerportal/multi_tracking.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {setResult(result); console.log(result)})
      .catch((error) => console.log("error", error));
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    let no = cnno.replace(/\s+/g, "");
    no = no.split(",");
    let a = no.map((n)=> `"${n}"`);
    fetchMultitrack(a.toString())
  };

  return (
    <div className={styles.multiTrackCard}>
      <div className={styles.data}>
        <form onSubmit={handleTrack}>
          <input
            value={cnno}
            onChange={handleCnno}
            placeholder="Enter shipment tracking number (CN Numbers) seprated by commas"
            type="text"
          />
          <button type="submit">Track</button>
        </form>
      </div>
      {result && 
        result.map((r) => <MultiTrackBox key={r.shipmentnumber} details={r.Details} cnDetail={r.cnDetail} cust_add={r.cust_add} cust_name={r.cust_name} cust_ref={r.cust_ref} shipmentnumber={r.shipmentnumber} />)
      }
      
    </div>
  );
};

export default MultiTrackCard;
