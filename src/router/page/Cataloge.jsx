import Cart from "../../components/UI/Cart";
import './index.css'
import { useGetProductsQuery } from "../../redux/apiProducts";
import { useSelector } from "react-redux";




export default function Cataloge (){
  const prod = useSelector(state=>state.basket.product)

  const {data:products, isLoading, error} = useGetProductsQuery()
  
    return(
    <div className="Cataloge">
      {prod?.map((item)=><Cart item={item}/>)}
    </div>
    )
}