import styles from "./SettlementCard.module.css"
import { useStateValue } from "../../context/StateProvider";
import useSWR from 'swr'
import { parseCookies } from "../../helpers/"
import { useCookies } from "react-cookie"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';

import TimelineDot from '@material-ui/lab/TimelineDot';

const dateChanger = (date) => {
    let d = date.split("-");
    var month = [ "0", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return `${d[0]}-${month[+d[1]]}`
}

const SettlementCard = (props) => {
    const [{acno, statement}, dispatch] = useStateValue();
    const [cookie, setCookie] = useCookies(["user"])
    let cookObject = Object.values(cookie)[0]
    const a = cookObject
    const ac = "KHI-06366"
    
    const url =  `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=${ac}&hashkey=KaPdSgVkYp3s6v9y`;
    const getData = async () => {
        const response = await fetch(url);
        return await response.json()
        
    };
    const { data, error } = useSWR(url, getData)

    function OpenWindowWithPost(url, name, params) {
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", url);
        form.setAttribute("target", name);
        for (let i in params) {
            if (params.hasOwnProperty(i)) {
                let input = document.createElement('input');
                input.type = 'hidden';
                input.name = i;
                input.value = params[i];
                form.appendChild(input);
            }
        }
        document.body.appendChild(form);
        if (name == '_blank') {} else {
            window.open("post.htm", name);
        }
        form.submit();
        document.body.removeChild(form);
    }
    function OpenWindowWithPost(url, name, params) {
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", url);
        form.setAttribute("target", name);
        for (var i in params) {
            if (params.hasOwnProperty(i)) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = i;
                input.value = params[i];
                form.appendChild(input);
            }
        }
        document.body.appendChild(form);
        if (name == '_blank') {} else {
            window.open("post.htm", name);
        }
        form.submit();
        document.body.removeChild(form);
    }
    function statementView( FPS){
        var FPSCODE =  FPS;
        var param = {'FPS_CODE' : FPSCODE}
        OpenWindowWithPost('http://benefitx.blue-ex.com/fnsum-cusprn.php', '_blank', param);
     
    }

    return ( 
        <div className={styles.settlement}>
            {data && 
            <>
            <div>
                <div className={styles.top}>
                <h2>Settlement History</h2>
                
            </div>
            </div>
            <div className={styles.shipment}>
                    <div className={styles.container}>
                        <h3 style={{fontSize:"18px",color:"#57636a",letterSpacing: "0.7px",fontWeight: "300"}}>Last Statement for the period</h3>
                        <span style={{
                            fontSize: "12px",
                            lineHeight: "0px",
                            fontWeight: "100",
                            }}> 
                            of {dateChanger(data[0].SDATE)} to {dateChanger(data[0].EDATE)}</span>
                        <div className={styles.no} style={{fontSize: "35px"}}>Rs. {data[0].CODAMOUNT}
                        
                        </div>
                    </div>
            </div>
            <div className={styles.settleData}>
                <div className={styles.data}>
                            { 
                            data.map((d) => <div className={styles.sdata} key={d.FPS_CODE}>
                                    <div className={styles.date} style={{fontSize:"14px"}}>{dateChanger(d.SDATE)} to {dateChanger(d.EDATE)}</div>
                                   <>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                            <TimelineDot  variant="outlined" color="secondary" style={{padding: "6px" ,marginTop:"0px",marginBottom:"0px"}}/>
                                            <TimelineConnector />
                                            </TimelineSeparator>
                                        </TimelineItem>
                                </>
                                    <div
                                     className={styles.amount} 
                                     style={{fontSize:"16px",paddingRight:"32px",paddingLeft:"20px"}}>
                                    <a href="javascript:void(0);" 
                                     onClick={() => {(statementView(d.CODAMOUNT));
                                    }} 
                                   >RS.{d.CODAMOUNT}</a> </div>
                                </div>
                                )
                                
                            }
                        </div>
            </div>
            </>
            }
            
          
        </div>
     );
}

export async function getServerSideProps(context) {
    const [cookie, setCookie] = useCookies(["user"])
    let cookObject = Object.values(cookie)[0]
    return {
      props: {
        acno: cookObject.acno
      }
    }
  }
 
export default SettlementCard;