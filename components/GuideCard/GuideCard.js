import styles from "./GuideCard.module.css"

const GuideCard = ({ heading, text, image, format }) => {
    return ( 
        <div className={styles.GuideCard}>
            <div className={styles.top}>
                <h2>{ heading }</h2>
            </div>
            <div className={styles.data}>
                <div className={styles.text}>{text}</div>
                <div className={styles.image}>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default GuideCard;