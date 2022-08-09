import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";

function Register() {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  // const product = useSelector((state) => state.product);

  const dispach = useDispatch();

  const register = () => {
    dispach({
      type: "REGISTER",
      abc: {
        id: new Date().getTime(),
        Name,
        UserName,
        Password,
        Cpassword,
      },
    });
  };

  return (
    <form>
      <br></br>
      {/* {product.map((product) => {
        return (
          <div key={product.id}>
            {product.name} - {product.status} -{product.species}
            <img src={product.image}></img>
          </div>
        );
      })} */}
      <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={Cpassword}
        onChange={(e) => setCpassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <input type="button" value="Register" onClick={register} />
    </form>
  );
}

export default Register;
