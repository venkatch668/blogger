import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import { get } from "../../util/rest";
import { NavLink, Link } from "react-router";
function Signout() {

  useEffect(()=>{
    get("/users/logout")
    .then((res) => {
      localStorage.removeItem("userData");
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  return (
    <div className="container mt-5 ">
      <p className="h1">You have successfully signed out.</p>
      <p>Thank you for visiting! See you again soon.</p>
      <NavLink to="/"> Sign in </NavLink> 
    </div>
  );
}

export default Signout;
