import { API_URL } from "../../constants/env"
import Banner from "../organisms/Banner"
import MainProducts from "../organisms/MainProducts"

function Home() {
  return (
    <>
    <Banner></Banner>
      <div>
        <h2 className="mt-8 text-2xl">Nuestro recientes productos</h2>
        <MainProducts></MainProducts>
      </div>
    
    </>
  )
}

export default Home
