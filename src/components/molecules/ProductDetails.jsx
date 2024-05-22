import { BsType } from "react-icons/bs"
import { PRODUCT_DETAILS } from "../../constants/product-details"
import ProductDetailItem from "../atoms/ProductDetailItem"

export const ProductDetails = ({details, isNew}) => {

    const features = Object.entries(details)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Detalles del Producto</h2>
      <div className="rounded-lg bg-slate-100 grid grid-cols-3 gap-5 p-5">
        {features.map((detail)=>{
          const [key,value] = detail
          const type = PRODUCT_DETAILS[key]

          if(!value) return

          return <ProductDetailItem type={type} value={value} key={type}></ProductDetailItem>
        })}
        <ProductDetailItem type={"Condición del producto"} value={isNew ? "Nuevo " : "Usado"}></ProductDetailItem>
      </div>
    </div>
  )
}
