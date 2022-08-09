import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Register from "./Component/Register";
import Login from "./Component/Login";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import Prodect from "./Component/Prodect";

function App() {
  const product = useSelector((state) => state.product);
  const register = useSelector((state) => state.users);
  const logout = useSelector((state) => state.user);

  const dispach = useDispatch();

  return (
    <div className="App">
      {product.map((product) => {
        return (
          <div key={product.id}>
            {product.name} - {product.status} -{product.species}
            <img src={product.image}></img>
          </div>
        );
      })}

      {register.map((register) => {
        return (
          <div key="hello">
            {register.Name} - {register.UserName}
          </div>
        );
      })}
      <Register />

      {logout ? (
        <input
          type="button"
          value="logout"
          onClick={() => {
            dispach({
              type: "LOGOUT",
            });
          }}
        />
      ) : (
        <Login />
      )}
      <br></br>
      <Prodect />
    </div>
  );
}

export default App;
