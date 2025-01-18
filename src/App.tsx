import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import {RootLayout} from "./components/RootLayout.tsx";
import {Home} from "./components/wall/Home.tsx";
import {StaffWall} from "./components/wall/StaffWall.tsx";
import {VehicleWall} from "./components/wall/VehicleWall.tsx";
import {FieldWall} from "./components/wall/FieldWall.tsx";
import {EquipmentWall} from "./components/wall/EquipmentWall.tsx";
import {CropWall} from "./components/wall/CropWall.tsx";
import {Monitoring_LogWall} from "./components/wall/Monitoring_LogWall.tsx";


function App() {


  return (
    <>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<LoginPage/>}/>*/}
                {/*<Route path="/register" element={<RegisterPage />} />*/}

                <Route path="/dashboard" element={ <RootLayout /> } >
                    <Route path="home" element={ <Home /> } />
                    <Route path="staff_management" element={ <StaffWall /> } />
                    <Route path="vehicle_management" element={ <VehicleWall /> } />
                    <Route path="field_management" element={ <FieldWall /> } />
                    <Route path="equ_management" element={ <EquipmentWall /> } />
                    <Route path="crop_management" element={ <CropWall /> } />
                    <Route path="monitor_log" element={ <Monitoring_LogWall /> } />

                </Route>

            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
