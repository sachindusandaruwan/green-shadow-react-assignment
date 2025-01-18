import dashboard_icon from '../assests/icon/dashBoard.png';
import staff_icon from '../assests/icon/staff.png';
import vehicle from '../assests/icon/vehicle.png';
import field_icon from '../assests/icon/field.png';
import rqu_icon from '../assests/icon/equipment.png';
import crop_icon from '../assests/icon/crop.png';
import monitor_log from '../assests/icon/monitoringLog.png';
import log_out from '../assests/icon/logout.png';
import logo from '../assests/logo.png';
import '../css/components/NavigationBar.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import dashBoardh from '../assests/icon/hover/dashBoard.png';
import staff_iconh from '../assests/icon/hover/staff.png';
import vehicleh from '../assests/icon/hover/vehicle.png';
import field_iconh from '../assests/icon/hover/field.png';
import rqu_iconh from '../assests/icon/hover/equipment.png';
import crop_iconh from '../assests/icon/hover/crop.png';
import monitor_logh from '../assests/icon/monitoringLog.png';


interface Icon {
    default: string;
    hover: string;

}

const icons: Record<string, Icon> = {
    'dashboard-icon': { default: dashboard_icon, hover: dashBoardh},
    'staff-icon': { default: staff_icon,hover: staff_iconh },
    vehicle: { default: vehicle, hover: vehicleh },
    'field-icon': { default: field_icon, hover: field_iconh },
    rqu_icon: { default: rqu_icon, hover: rqu_iconh },
    crop_icon: { default: crop_icon , hover: crop_iconh},
    monitor_log: { default: monitor_log, hover: monitor_logh },
};

const navigations: Record<string, string> = {
    'dashboard-icon': 'home',
    'staff-icon': 'staff_management',
    vehicle: 'vehicle_management',
    'field-icon': 'field_management',
    rqu_icon: 'equ_management',
    crop_icon: 'crop_management',
    monitor_log: 'monitor_log',
};

const NavigationBar = () => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string>('dashboard-icon');

    const handleMouseEnter = (button: string) => {
        setHoveredButton(button);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const handleClick = (button: string) => {
        setActiveButton(button);
    };

    return (
        <div className="nav-bar text-center">
            <img className="mt-5" src={logo} alt="logo" />
            <div className="d-flex flex-column align-items-center justify-content-center h-75 gap-5 mt-5">
                {Object.keys(icons).map((key) => (
                    <Link to={`/dashboard/${navigations[key]}`} key={key}>
                        <img
                            className={key}
                            src={
                                activeButton === key || hoveredButton === key
                                    ? icons[key].hover
                                    : icons[key].default
                            }
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(key)}
                            alt={`${key.replace('-', ' ')} icon`}
                        />
                    </Link>
                ))}
            </div>
            <div>
                <img
                    className="log-out-btn h-auto"
                    src={log_out}
                    onMouseEnter={() => handleMouseEnter('log-out-btn')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick('log-out-btn')}
                    alt="log out icon"
                />
            </div>
        </div>
    );
};

export default NavigationBar;
