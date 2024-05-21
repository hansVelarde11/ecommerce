import { Outlet } from "react-router-dom"
import AdminMenu from "../molecules/header/AdminMenu"
import MainHeader from "../organisms/MainHeader"

const Admin = () => {
  return (
    <div>
        <MainHeader>
          <AdminMenu></AdminMenu>
        </MainHeader>
        <div className="pt-16 max-w-256 m-auto">
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Admin