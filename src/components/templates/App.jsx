import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
  return (
    <div>
        <MainHeader></MainHeader>
        <div className="pt-16 max-w-256 m-auto">
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default App