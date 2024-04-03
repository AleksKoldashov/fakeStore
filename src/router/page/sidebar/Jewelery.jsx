import Cart from "../../../components/UI/Cart";
import { useGetCategoriesJeweleryQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Jewelery(params) {
    const {data: jewelery, isLoading, error} = useGetCategoriesJeweleryQuery()
    console.log(jewelery);
    return(
        <div className="electro">
               {jewelery?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}