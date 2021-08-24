import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PieChart from "../PieChart/PieChart";
import PieChart2 from "../PieChart/PieChart2";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import styles from "./SummaryCard.module.css";
import dsty from "../../styles/dateRange.module.css";
import useVisible from "../../hooks/useVisible";
import useSWR from "swr";
import { useCookies } from "react-cookie";
import FormData from "form-data";
import { parse } from "cookie";
import CurrencyFormat from "react-currency-format";

const SummaryCard = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [acno, setAcno] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (cookie) {
      setAcno(Object.values(cookie)[0].acno);
    }
  }, [cookie]);

  const url = "http://benefit.blue-ex.com/api/customerportal/shipmentgraph.php";
  var formdata = new FormData();
  formdata.append(
    "request",
    '{"acno": "KHI-06366", "startdate": "2020/02/01", "enddate": "2021/02/01"}'
  );

  const requestOptions = {
    method: "POST",
    body: formdata,
  };

  const getData = async () => {
    const response = await fetch(url, requestOptions);
    return await response.json();
  };

  const { data, error } = useSWR(url, getData);

  useEffect(() => {
    if (data !== undefined) {
      setSummary(data);
    }
  }, [data]);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [dateDisplay, setDateDisplay] = useState("none");

  const handleDateDisplay = () => {
    setDateDisplay(dateDisplay === "none" ? "block" : "none");
  };

  const ref = useRef();

  useVisible(ref, () => {
    setDateDisplay("none");
  });

  return (
    <div className={styles.summary}>
      <div className={styles.top}>
        <h2>Account Summary</h2>
        <div className={styles.topRight} ref={ref} onClick={handleDateDisplay}>
          {/* <span className={styles.day}>Last 30 Days</span> */}
          <span
           className={` {styles.date } `} 
           style={{
             padding:"0.7rem 0.75rem 0.7rem 1.5rem",
             fontSize: "0.9rem",
             color: "#0047ba",
            fontWeight: "500"
            }}>
              Aug 13 - Aug 19
            </span>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      {summary && (
        <>
          <div className={dsty.dataRange} style={{ display: dateDisplay }}>
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
            ;
          </div>

          <div className={styles.chartContainer}>
            <div className={styles.chartBox}>
              <div>
                <div className={styles.shipment} >
                  <div className={styles.container}>
                    <div className={styles.no} style={{paddingTop:"0px" ,paddingBottom:"0px"}}>
                      {/* {summary.booked} */}
                      <CurrencyFormat
                        renderText={(value) => <>{value}</>}
                        value={summary.booked}
                        displayType={"text"}
                        thousandSeparator={true}
                        decimalScale={2}
                      />
                    </div>
                    <div className={styles.name}>Shipments Booked</div>
                  </div>
                </div>
                <div className={styles.pieBar}>
                  <div className={styles.pie}>
                    <PieChart
                      name1="Acceptance Shipment"
                      value1={summary.accepted}
                      name2="Booked Shipment"
                      value2={summary.notarrival}
                      name3="Shipment Ready for Pickup"
                      value3={summary.readyforpickup}
                    />
                  </div>
                  <div className={styles.bars}>
                    <div className={styles.bar}>
                      <div className={styles.val}>{summary.accepted}</div>
                      <div className={styles.line} style={{ height:"6px"}}>
                        <div
                          className={styles.linefill}
                          style={{
                            width:
                              (+summary.accepted * 100) /
                                (+summary.accepted +
                                  +summary.notarrival +
                                  +summary.readyforpickup) +
                              "%",
                              height:"6px",
                          }}
                        ></div>
                      </div>
                      <div className={styles.name}>
                        <a href="/" target="_blank">
                          Accepted Shipments
                        </a>
                      </div>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.val}>{summary.notarrival}</div>
                      <div className={styles.line} style={{ height:"6px"}}>
                        <div
                          className={styles.linefill}
                          style={{
                            background: "#00ADEF",
                            width:
                              (+summary.notarrival * 100) /
                                (+summary.accepted +
                                  +summary.notarrival +
                                  +summary.readyforpickup) +
                              "%",
                          }}
                        ></div>
                      </div>
                      <div className={styles.name}>
                        <a href="/" target="_blank">
                          Booked Shipments
                        </a>
                      </div>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.val}>{summary.readyforpickup}</div>
                      <div className={styles.line} style={{ height:"6px"}}>
                        <div
                          className={styles.linefill}
                          style={{
                            background: "#03A596",
                            width:
                              (+summary.readyforpickup * 100) /
                                (+summary.accepted +
                                  +summary.notarrival +
                                  +summary.readyforpickup) +
                              "%",
                          }}
                        ></div>
                      </div>
                      <div className={styles.name}>
                        <a href="/" target="_blank">
                          Shipments Ready for Pickup
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.chartBox}>
              <div>
                <div className={styles.shipment}>
                  <div className={styles.container}>
                    <div className={styles.no}>
                      {/* {summary.accepted} */}
                      <CurrencyFormat
                        renderText={(value) => <>{value}</>}
                        value={summary.accepted}
                        displayType={"text"}
                        thousandSeparator={true}
                        decimalScale={2}
                      />
                    </div>
                    <div className={styles.name}>Shipments Accepted</div>
                  </div>
                </div>
                <div className={styles.pieBar}>
                  <div className={styles.pie}>
                    <PieChart2
                      name1="Arrived Shipments"
                      value1={summary.arrival}
                      name2="In-Transit Shipments"
                      value2={summary.intransit}
                      name3="Delivered Shipments"
                      value3={summary.delivered}
                      name4="Returned Shipment"
                      value4={summary.returndelivered}
                    />
                    <div className={styles.bars}>
                      <div className={styles.bar}>
                        <div className={styles.val}>{summary.arrival}</div>
                        <div className={styles.line} style={{ height:"6px"}}>
                          <div
                            className={styles.linefill}
                            style={{
                              background: "#7e5e7b",
                              width:
                                (+summary.arrival * 100) /
                                  (+summary.arrival +
                                    +summary.intransit +
                                    +summary.delivered +
                                    +summary.returndelivered) +
                                "%",
                            }}
                          ></div>
                        </div>
                        <div className={styles.name}>
                          <a href="/" target="_blank">
                            Arrived Shipments
                          </a>
                        </div>
                      </div>
                      <div className={styles.bar}>
                        <div className={styles.val}>{summary.intransit}</div>
                        <div className={styles.line} style={{ height:"6px"}}>
                          <div
                            className={styles.linefill}
                            style={{
                              background: "#ffc212",
                              width:
                                (+summary.intransit * 100) /
                                  (+summary.arrival +
                                    +summary.intransit +
                                    +summary.delivered +
                                    +summary.returndelivered) +
                                "%",
                            }}
                          ></div>
                        </div>
                        <div className={styles.name}>
                          <a href="/" target="_blank">
                            In-Transit Shipments
                          </a>
                        </div>
                      </div>
                      <div className={styles.bar}>
                        <div className={styles.val}>{summary.delivered}</div>
                        <div className={styles.line} style={{ height:"6px"}}>
                          <div
                            className={styles.linefill}
                            style={{
                              background: "#c6d53f",
                              width:
                                (+summary.delivered * 100) /
                                  (+summary.arrival +
                                    +summary.intransit +
                                    +summary.delivered +
                                    +summary.returndelivered) +
                                "%",
                            }}
                          ></div>
                        </div>
                        <div className={styles.name}>
                          <a href="/" target="_blank">
                            Delivered Shipments
                          </a>
                        </div>
                      </div>
                      <div className={styles.bar}>
                        <div className={styles.val}>
                          {summary.returndelivered} / {summary.return} (
                          {Math.trunc(
                            (+summary.returndelivered * 100) / +summary.return
                          ) + "%"}
                          ){" "}
                        </div>
                        <div className={styles.line} style={{ height:"6px"}}>
                          <div
                            className={styles.linefill}
                            style={{
                              background: "#ed1f60",
                              width:
                                (+summary.returndelivered * 100) /
                                  (+summary.arrival +
                                    +summary.intransit +
                                    +summary.delivered +
                                    +summary.returndelivered) +
                                "%",
                            }}
                          ></div>
                        </div>
                        <div
                          className={styles.line}
                          style={{ marginTop: "0.2rem" ,height:"6px"}}
                        >
                          <div
                            className={styles.linefill}
                            style={{
                              background: "#C6D53F",
                              width:
                                (+summary.return * 100) /
                                  (+summary.arrival +
                                    +summary.intransit +
                                    +summary.delivered +
                                    +summary.returndelivered) +
                                "%",
                            }}
                          ></div>
                        </div>
                        <div className={styles.name}>
                          <a href="/" target="_blank">
                            Returns - Delivered / Total
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryCard;
