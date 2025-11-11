import {Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import ChannelList from "../components/channelList/channelList"
const AppRouters = () => {
  return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/DashBoard" element={<DashBoard/>}/>
    <Route path='/channelList' element={<ChannelList/>}/>
</Routes>
  )
}

export default AppRouters
