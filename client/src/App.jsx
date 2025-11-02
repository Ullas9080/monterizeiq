import { BrowserRouter as Router } from "react-router-dom"
import Menu from "./components/Menu/Menu"
import Home from "./pages/Home"
import DashBoard from "./pages/DashBoard"
import AppRouters from "./AppRouters/AppRouters"

const App = () => {



  return (
  <Router>
      <aside className="hidden md:block fade-in">
        <Menu />
        
      </aside>
   
      <main className="md:ml-64 flex-1 ">
     <AppRouters/>
      </main>
   
    </Router>
  )
}

export default App
