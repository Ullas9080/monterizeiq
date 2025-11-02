import {Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
const AppRouters = () => {
  return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/DashBoard" element={<DashBoard/>}/>
</Routes>
  )
}

export default AppRouters
