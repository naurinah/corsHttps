import styles from "./FareModal.module.css";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const FareModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.fareModal}>
      <button type="button" onClick={handleOpen}>
        Calculate Fare
      </button>
      <Modal
        className={styles.modal}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={styles.heading} id="spring-modal-title">
              Calculate Your Fare
            </h2>
            <div className={styles.desc}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label htmlFor="code">Service Code: </label>
                  <select name="code" id="code">
                    <option value="BLUE EDGE">BLUE EDGE</option>
                  </select>
                </div>
                <div className={styles.col}>
                  <label htmlFor="origin-city">Origin City: </label>
                  <select name="origin-city" id="origin-city">
                    <option value="Karchi">Karachi</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label htmlFor="dest-country">Destination Country: </label>
                  <select name="dest-country" id="dest-country">
                    <option value="Pakistan">PAKISTAN</option>
                  </select>
                </div>
                <div className={styles.col}>
                  <label htmlFor="dest-city">Destination City: </label>
                  <select name="dest-city" id="dest-city">
                    <option value="city">Select City</option>
                    <option value="Karachi">Karachi</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label htmlFor="weight">CBC Weight: </label>
                  <input id="weight" name="weight" type="number" />
                </div>
                <div className={styles.col}>
                  <label htmlFor="cod-amount">COD AMOUNT: </label>
                  <input id="cod-amount" name="cod-amount" type="number" />
                </div>
              </div>
              
              <div className={styles.row}>
                <div className={`${styles.col} ${styles.col2}`}>
                  <label htmlFor=""></label>
                  <button>Calculate</button>
                </div>
                <div className={styles.col}></div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default FareModal;
