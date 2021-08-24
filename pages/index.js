import Head from "next/head";
import styles from "../styles/Home.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLogin from "../hooks/useLogin";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { parseCookies } from "../helpers/";
import { useCookies } from "react-cookie";

export default function Home({}) {
  
  const [show, setShow] = useState("password");
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRequired, setUserRequired] = useState("none");
  const [passRequired, setPassRequired] = useState("none");
  const [incorrect, setIncorrect] = useState("none");
  const [data, setData] = useState({});
  const [{}, dispatch] = useStateValue();
  const [cookie, setCookie] = useCookies(["user"]);

  const handleUser = (e) => {
    if (userRequired === "flex") setUserRequired("none");
    if (incorrect === "flex") setIncorrect("none");
    setUsername(e.target.value);
  };
  const handlePass = (e) => {
    if (passRequired === "flex") setPassRequired("none");
    if (incorrect === "flex") setIncorrect("none");
    setPassword(e.target.value);
  };

  const handlePassword = () => {
    setShow(show === "text" ? "password" : "text");
  };

  const url = "http://benefitx.blue-ex.com/api/customerportal/login.php";

  const login = async () => {
    await fetch(
      `${url}?request={"username":"${username}","password":"${password}"}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setCookie("user", JSON.stringify(result), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
      });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      if (username === "") {
        setUserRequired("flex");
      }
      if (password === "") {
        setPassRequired("flex");
      }
    } else {
      login();

      if (data.message === "Wrong Username") {
        console.log(data.message);
        setIncorrect("flex");
      } else {
        dispatch({
          type: actionTypes.SET_DETAILS,
          acno: data.acno,
          b_usrId: data.b_usrId,
          name: data.name,
          acc_type: data.type,
        });

        router.push("/dashboard");
      }
    }
  };

  return (
    <div className={styles.container}>
      <>
        <Head>
          <title>Login | blueEX Booking App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.back}></div>
        <main className={styles.main}>
          <div className={styles.left}>
            <img src="/logologin.svg" alt="blueEX" />
            <form method="POST" onSubmit={handleForm}>
              <div style={{ display: incorrect }} className={styles.incorrect}>
                <p>Incorrect username or password. please try again!</p>
                <CloseIcon
                  onClick={() => {
                    setIncorrect("none");
                  }}
                />
              </div>
              <input
                type="text"
                value={username}
                onChange={handleUser}
                placeholder="User Name"
              />
              <p
                style={{ display: userRequired }}
                id="user-required"
                className={styles.required}
              >
                This field is required
              </p>
              <div className={styles.password}>
                <input
                  type={show}
                  value={password}
                  onChange={handlePass}
                  placeholder="Password"
                />
                {show === "password" && (
                  <VisibilityIcon
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "2.2rem",
                      color: "#91899f",
                    }}
                    onClick={handlePassword}
                  />
                )}
                {show === "text" && (
                  <VisibilityOffIcon
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "2.2rem",
                      color: "#91899f",
                    }}
                    onClick={handlePassword}
                  />
                )}
              </div>
              <p
                style={{ display: passRequired }}
                id="pass-required"
                className={styles.required}
              >
                This field is required
              </p>
              <p>
                <small className={styles.forget}>
                  Forgot password? Call Customer Service at
                  <span> 021-111-BLUE-EX (258339)</span>
                </small>
              </p>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className={styles.right}></div>
        </main>
      </>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = parseCookies(req);

  if (res) {
    if ("user" in Object.keys(data)) {
      res.writeHead(301, { Location: "/dashboard" });
      res.end();
    }
  }
  return {
    props: {
      data3: data
    }
  }
}

