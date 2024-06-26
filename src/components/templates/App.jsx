import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import MainMenu from "../molecules/header/MainMenu"

const App = () => {
  return (
    <div>
        <MainHeader>
          <MainMenu></MainMenu>
        </MainHeader>
        <div className="pt-16 max-w-256 m-auto">
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default App