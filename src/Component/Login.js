import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

function Login() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const dispach = useDispatch();
  const register = useSelector((state) => state.users);

  const login = () => {
    const payload = register.find(
      (users) => users.UserName === UserName && users.Password === Password
    );

    if (payload) {
      dispach({
        type: "LOGIN",
        payload,
      });
      alert("Login Succesfully ...!!");
    } else {
      alert("UserName OR Password Not Valid ...!!!");
    }
  };

  return (
    <form>
      <br></br>

      <input
        type="text"
        placeholder="UserName"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <input type="button" value="Login" onClick={login} />
    </form>
  );
}

export default Login;
