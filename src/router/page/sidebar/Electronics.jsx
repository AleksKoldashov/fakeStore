import Cart from "../../../components/UI/Cart";
import { useGetCategoriesElectronicsQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Electronics(params) {
    const {data: electronics, isLoading, error} = useGetCategoriesElectronicsQuery()
    console.log(electronics);
    return(
        <div className="electro">
               {electronics?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}