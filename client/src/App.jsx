import { BrowserRouter as Router } from "react-router-dom"
import Menu from "./components/Menu/Menu"
import AppRouters from "./AppRouters/AppRouters"

const App = () => {



  return (
  <Router>
     <div>
    <Menu />
   <div className="md:flex-1 md:ml-64 p-4">
    <AppRouters />
  </div>
     </div>

   
    </Router>
  )
}

export default App
