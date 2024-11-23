import React from "react";
import Navbart from "./Navbart";
import NavAdmin from "../AdminFolder/NavAdmin";

function MainNavbar() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    return isAdmin ? <NavAdmin /> : <Navbart />;
}

export default MainNavbar;
