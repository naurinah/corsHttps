import { useCookies } from "react-cookie"


export default statement(async (req, res) => {
    const [cookie, setCookie] = useCookies(["user"])
    console.log(cookie.user)
    const { username } = await req.body;
    const url = `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=$${acno}`;
  
    fetch(baseURL)
        .then(response => response.json())
        .then(data => console.log(data)
        );
  });