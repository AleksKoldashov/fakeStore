import Cart from "../../../components/UI/Cart";
import { useGetCategoriesJeweleryQuery, useGetCategoriesWomansQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Womans(params) {
    const {data: womans, isLoading, error} = useGetCategoriesWomansQuery()
    console.log(womans);
    return(
        <div className="electro">
               {womans?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}