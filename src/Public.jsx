import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Public() {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Public;
