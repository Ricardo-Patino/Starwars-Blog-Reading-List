import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersDetails = () => {
 const { store } = useContext(Context);
 const params = useParams();
 return (
      <div> issues </div>
 );
};
