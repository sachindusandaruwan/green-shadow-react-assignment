import { Link, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import "../style/Sidebar.css";
import stafficon from "../assests/icon/staff.png";
import fieldicon from "../assests/icon/field.png"
import cropicon from "../assests/icon/crop.png"
import equipmenticon from "../assests/icon/equipment.png"
import vehicleicon from "../assests/icon/vehicle.png"
import monicon from "../assests/icon/monitoringLog.png"
import  logouticon from "../assests/icon/logout.png"
import dashboardicon from "../assests/icon/dashBoard.png"
import { useEffect, useState } from "react";

export const Sidebar = () => {



    // Timer for the current time
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-28 h-screen p-4">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="search-bar">
                    <p className="topic font-bold">GREEN SHADOW</p>
                </div>
                <div className="date-time text-inherit">
                    {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                </div>
                <img
                    src="src/assests/logo.png" // Ensure this path is correct
                    alt="User Profile"
                    className="profile-pic"
                />
            </div>

            {/* Sidebar */}
            <aside className="sidebar" >
                <ul className="sidebar-links">

                    <li><Link className="sidebar-link px-4 py-2 rounded-full flex items-center" to="/dashboard">
                        <img className="icon w-5 h-5 mr-2" src={dashboardicon} alt="Dashboard Icon"/>
                    </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full flex items-center" to="/staff">
                            <img className="icon w-5 h-5 mr-2" src={stafficon} alt="Staff Icon"/>
                        </Link>
                    </li>
                    <li><Link className="sidebar-link px-4 py-3 rounded-full flex items-center" to="/field">
                        <img className="icon w-5 h-5 mr-2" src={fieldicon} alt="Field Icon"/>
                    </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full items-center" to="/crop">
                            <img className="icon w-5 h-5 mr-2" src={cropicon} alt="Crop Icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full items-center" to="/equipment">
                            <img className="icon w-5 h-5 mr-2" src={equipmenticon} alt="Equipment Icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full items-center" to="/vehicle">
                            <img className="icon w-5 h-5 mr-2" src={vehicleicon} alt="Vehicle Icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full items-center" to="/monitoring">
                            <img className="icon w-5 h-5 mr-2" src={monicon} alt="Monitoring Icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link px-4 py-3 rounded-full items-center" to="/login">
                            <img className="icon w-5 h-5 mr-2" src={logouticon} alt="Log Out Icon"/>
                        </Link>
                    </li>
                </ul>
            </aside>

        </div>
    );
};
