import { useState } from "react";
import "./styles.css";
import { NavLink, Link } from "react-router";
import Profile from "../Dashboard";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <>
     <Header/>
      <div className="container-fluid ">
        <div className="row">
          <Sidebar/>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <Outlet />
          </main>

        </div>
      </div>
  </>
  );
}

export default Home;
