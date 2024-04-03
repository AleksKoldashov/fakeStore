import Cart from "../../../components/UI/Cart";
import { useGetCategoriesJeweleryQuery, useGetCategoriesMensQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Mens(params) {
    const {data: mens, isLoading, error} = useGetCategoriesMensQuery()
    console.log(mens);
    return(
        <div className="electro">
               {mens?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}