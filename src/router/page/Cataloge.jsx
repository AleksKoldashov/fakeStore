import Cart from "../../components/UI/Cart";
import './cataloge.css'
import { useGetProductsQuery } from "../../redux/apiProducts";
import { useSelector } from "react-redux";



export default function Cataloge (){
  const prod = useSelector(state=>state.basket)

  const {data:products, isLoading, error} = useGetProductsQuery()
    
  console.log(prod);
  
    return(
    <div className="Cataloge">
      {products?.map((item)=><Cart item={item}/>)}
 
    </div>
    )
}