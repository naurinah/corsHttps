import { useState, useEffect } from "react";
import axios from 'axios'

const url = "http://benefitx.blue-ex.com/api/customerportal/login.php"

const useLogin = (username, password) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const login = async () => {
        fetch(
            `${url}?request={"username":"${username}","password":"${password}"}`
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
            });
    };

    login();
  }, [username, password]);

  return { data };
};

export default useLogin;