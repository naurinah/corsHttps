import { useCookies } from "react-cookie"

const Auth = () => {
    
    return async () => {
        if (localStorage.getItem('acno') === null) {
            router.push("/")
        }
        //     else {
        //         dispatch({
        //             type: actionTypes.SET_DETAILS,
        //             acno: localStorage.getItem('acno'),
        //             b_usrId: localStorage.getItem('b_usrId'),
        //             name: localStorage.getItem('name'),
        //             acc_type: localStorage.getItem('type'),
        //             isLoggedin: true
        //           });
        //     }
        // }
    }

}
 
export default Auth;