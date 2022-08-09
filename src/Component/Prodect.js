import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import reducer from "../store/reducer";

function Prodect() {
  const product = useSelector((state) => state.product);
  const dispach = useDispatch();

  const getproduct = async () => {
    const respoce = await axios
      .get("https://rickandmortyapi.com/api/character")
      .catch((error) => {
        console.log("err", error);
      });

    dispach({
      type: "PRODUCT",
      payload: respoce.data.results,
    });
  };
  console.log(product);
  useEffect(() => {
    getproduct();
  }, []);

  return <div>Prodect</div>;
}

export default Prodect;
