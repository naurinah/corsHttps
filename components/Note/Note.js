import styles from "./Note.module.css"

const Note = ({ text }) => {
    return ( <div className={styles.note}>
        <p>{text}</p>
    </div> );
}
 
export default Note;