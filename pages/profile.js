import styles from "../styles/profile.module.css"
import Header from "../components/Header/Header";
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const Profile = () => {
    return ( 
        <div className={styles.profile}>
            <Head>
                <title>blueEX Booking App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>  
            <div className={styles.page}>
                <Sidebar />
                <div className={styles.pageRight}>
                    <main>
                        <h3 className={styles.heading}>Profile</h3>
                        <ProfileCard/>
                    </main>
                    <Footer/>
                </div>
            </div> 
        </div>
     );
}
 
export default Profile;