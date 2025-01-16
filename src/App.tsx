import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./page/LoginPage.tsx";

import {RegisterPage} from "./page/RegisterPage.tsx";


function App() {


  return (
    <>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage />} />

            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
