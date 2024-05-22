import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Profile = () => {
 const { userData } = useContext(UserContext)

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10 mb-6">
        <h1 className="text-4xl mb-6">Tu perfil</h1>
        <p>
          <span className="font-bold">ID de usuario: </span>
          <span>{userData?.id}</span>
        </p>
        <p>
          <span className="font-bold">Nombre completo: </span>
          <span>{userData?.details.fullname}</span>
        </p>
        <p>
          <span className="font-bold">Correo electrónico: </span>
          <span>{userData?.email}</span>
        </p>
        <p>
          <span className="font-bold">Fecha de registro: </span>
          <span>{userData?.created_at}</span>
        </p>
      </section>
      
    </div>
    
  )
}

export default Profile
