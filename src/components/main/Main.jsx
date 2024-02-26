import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Main() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default Main;