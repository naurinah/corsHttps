import styles from "../styles/statements.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import StatementList from "../components/StatementList/Statementlist";

const Statements = () => {
    return ( 
        <div className={styles.statements}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>   
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Statements</h3>
                        <div className={styles.cod}>COD</div>
                        <StatementList/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default Statements;