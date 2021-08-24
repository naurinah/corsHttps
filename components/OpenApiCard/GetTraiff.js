import styles from "./OpenApiCard.module.css"

const GetTraiff = () => {
    return ( 
        <div className={styles.openApi}>
            <h2>Get Tariff</h2>
            <h5>Credentials</h5>
            <table cellSpacing = '0' >
                <tbody>
                    <tr>
                        <td>URL</td>
                        <td>http://bigazure.com/api/demo/xml/tariff/serverxml.php</td>
                    </tr>
                    <tr>
                        <td>User ID</td>
                        <td>demo</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>demo123456</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>Post/Get</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h5>Data Passing XML</h5>
            <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span> {"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>DocumentType</span><span className="token punctuation">&gt;</span></span>5<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>DocumentType</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"} <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ShipmentDetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ServiceCode</span><span className="token punctuation">&gt;</span></span>BG<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ServiceCode</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>OriginCity</span><span className="token punctuation">&gt;</span></span>KHI<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>OriginCity</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>DestinationCountry</span><span className="token punctuation">&gt;</span></span>PK<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>DestinationCountry</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>DestinationCity</span><span className="token punctuation">&gt;</span></span>LHE<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>DestinationCity</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>Weight</span><span className="token punctuation">&gt;</span></span>1.5<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>Weight</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>CBCAmount</span><span className="token punctuation">&gt;</span></span>5000<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>CBCAmount</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ParcelType</span><span className="token punctuation">&gt;</span></span>P<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ParcelType</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"} <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ShipmentDetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}</code></pre>


            <h2>API Call Result</h2>
            <h5>Error In Detail</h5>
            <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span> {"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>0<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>message</span><span className="token punctuation">&gt;</span></span> You must enter Weight<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>message</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}</code></pre>


            <h5>Success Result</h5>
            <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span> {"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>weightcharges</span><span className="token punctuation">&gt;</span></span>280<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>weightcharges</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>gstcharges</span><span className="token punctuation">&gt;</span></span>0<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>gstcharges</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>othercharges</span><span className="token punctuation">&gt;</span></span>0<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>othercharges</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}</code></pre>


            <h2>Parameters definition for Order API</h2>
            <table cellSpacing="0" className="table table-bordered">
                <tbody>
                    <tr>
                    <th scope="row">Parameters</th>
                    <th scope="row">Sample data</th>
                    <th scope="row">Descriptions</th>
                    </tr>
                    <tr>
                    <td>&lt;ServiceCode&gt;BG&lt;/ServiceCode&gt;</td>
                    <td>&lt;ServiceCode&gt;BG&lt;/ServiceCode&gt;</td>
                    <td>Service Code provided by blueEx BG, BE</td>
                    </tr>
                    <tr>
                    <td>&lt;OriginCity&gt;KHI&lt;/OriginCity&gt;</td>
                    <td>&lt;OriginCity&gt;KHI&lt;/OriginCity&gt;</td>
                    <td>Shipper City : Only Code For example : KHI
                    </td>
                    </tr>
                    <tr>
                    <td>&lt;DestinationCountry&gt;PK&lt;/DestinationCountry&gt;</td>
                    <td>&lt;DestinationCountry&gt;PK&lt;/DestinationCountry&gt;</td>
                    <td>Destination Country : Only Code For example : PK</td>
                    </tr>
                    <tr>
                    <td>&lt;DestinationCity&gt; &lt;/DestinationCity&gt;</td>
                    <td>&lt;DestinationCity&gt;LHE&lt;/DestinationCity&gt;</td>
                    <td>Destination City where you want to Send</td>
                    </tr>
                    <tr>
                    <td>&lt;Weight&gt;&lt;/Weight&gt;</td>
                    <td>&lt;Weight&gt;1.5&lt;/Weight&gt;</td>
                    <td>Weight in Kgs.Only Enter Number 1 (1.5)</td>
                    </tr>
                    <tr>
                    <td>&lt;CBCAmount&gt;5000&lt;/CBCAmount&gt;</td>
                    <td>&lt;CBCAmount&gt;5000&lt;/CBCAmount&gt;</td>
                    <td>Total amount of order </td>
                    </tr>
                    <tr>
                    <td>&lt;ParcelType&gt;P&lt;/ParcelType&gt;</td>
                    <td>&lt;ParcelType&gt;P&lt;/ParcelType&gt;</td>
                    <td>Parcel Type</td>
                    </tr>
                </tbody>
                </table>


        </div>
     );
}
 
export default GetTraiff;