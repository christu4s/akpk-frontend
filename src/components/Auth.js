import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import axios from 'axios';
const AuthContext = createContext(null);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  var token = getCookie("token");
  const [userInfo, setUserInfo] = useState({});  

  const login = (user) => {
    setUserInfo(user);
  }

  const logout = () => {
    document.cookie = "token=; user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // setToken(null);
    setUserInfo(null);
    setUser(null);
  }
 
  useEffect(() => {
    if(!token) return;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
     axios.post(`http://10.250.1.121/osp-server/api/user_info`,null,config)
      .then(result => {
        console.log('result auth', result.response);
        setUserInfo(result.response);
      }).catch(error => {
        return error;
     });
 }, []);
  
  // useEffect(()=>{
  //  setUser(getCookie("user"));
  //  setToken(getCookie("token"));
  //  },[])

  return (
    <AuthContext.Provider value={{user, token ,userInfo, setUserInfo,  login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}