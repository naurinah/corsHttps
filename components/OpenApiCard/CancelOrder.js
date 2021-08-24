import styles from "./OpenApiCard.module.css"

const CancelOrder = () => {
    return ( 
        <div className={styles.openApi}>
            <h2>Cancel Order Api</h2>
            <h5>Credentials</h5>
            <div className="" style={{overflow: "auto"}}>
                <table cellSpacing = '0' >
                    <tbody>
                        <tr>
                            <td>URL</td>
                            <td>http://bigazure.com/api/demo/xml/cancel/serverxml.php</td>
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
            </div>
            <br/>
            <h5>Data Passing XML</h5>
            <div className="" style={{overflow: "auto", width:"100%"}}>
                <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>DocumentType</span><span className="token punctuation">&gt;</span></span>20<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>DocumentType</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"} <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ShipmentDetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>cnNumber</span><span className="token punctuation">&gt;</span></span>5005840372<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>cnNumber</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"} <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ShipmentDetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"  "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"\n"}{"\n"}</code></pre>
            </div>

            <h2>API Call Result</h2>
            <h5>Error In Detail</h5>
            <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>0<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>message</span><span className="token punctuation">&gt;</span></span> You must enter CN number<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>message</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>result</span><span className="token punctuation">&gt;</span></span>{"  "}{"\n"}{"\n"}</code></pre>

            <h5>Success Result</h5>
            <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>voidStatus</span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>voidStatus</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"\n"}{"\n"}</code></pre>

            <h2>Parameters definition for Order API</h2>
            <table cellSpacing='0' className="table table-bordered">
                <tbody>
                    <tr>
                    <th scope="row">Parameters</th>
                    <th scope="row">Sample data</th>
                    <th scope="row">Descriptions</th>
                    </tr>
                    <tr>
                    <td>&lt;cnNumber&gt; &lt;/cnNumber&gt;</td>
                    <td>&lt;cnNumber&gt;5005840372&lt;/cnNumber&gt;</td>
                    <td>Consignee Number which you will get at the time of placing order</td>
                    </tr>
                    <tr>
                    <td>&lt;userid&gt; &lt;/userid&gt;</td>
                    <td>&lt;userid&gt;demo&lt;/userid&gt;</td>
                    <td>Provided from BlueEX</td>
                    </tr>
                    <tr>
                    <td>&lt;password&gt; &lt;/password&gt;</td>
                    <td>&lt;password&gt;demo&lt;/password&gt;</td>
                    <td>Provided from BlueEX</td>
                    </tr>
                </tbody>
                </table>

        </div>
     );
}
 
export default CancelOrder;