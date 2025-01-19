import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import {SidebarProvider} from "./component/context/SidebarContext.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {Staffs} from "./pages/Staff.tsx";
import {Error} from "./pages/Error.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import  {FieldForm} from "./pages/Field.tsx";
import {CropForm} from "./pages/Crop.tsx";
import {EquipmentForm} from "./pages/Equipment.tsx";
import {VehicleForm} from "./pages/Vehicle.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import {AuthProvider} from "./component/context/AuthContext.tsx";
import {MonitoringForm} from "./pages/Monitoring.tsx";

function App() {
    const routes = createBrowserRouter([
        { path: "/", element: <Navigate to="/login" replace /> },
        { path: "/login", element: <Login /> },
        { path: "/Register", element: <Register /> },
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/staff", element: <Staffs/> },
                { path: "/field", element: <FieldForm/> },
                { path: "/crop", element: <CropForm/> },
                { path: "/equipment", element: <EquipmentForm/> },
                { path: "/vehicle", element: <VehicleForm/> },
                { path:"/monitoring",element:<MonitoringForm/>}
            ],
            errorElement: <Error />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return (
        <AuthProvider>
            <SidebarProvider>
                <RouterProvider router={routes} />
            </SidebarProvider>
        </AuthProvider>

    );
}
export default App;
