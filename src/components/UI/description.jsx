import { useParams } from 'react-router-dom'
import './cart.css'
import { useGetProductsIdQuery, useGetProductsQuery } from '../../redux/apiProducts';

export default function Description() {

     const productId = useParams()
     const prod = productId.productId
    
    const {data: product, isLoading, error} = useGetProductsIdQuery(prod)
 

    return(
        <div className="Desc">
           {product && <div>{product.title}
           <h4>{product.description}</h4>
           </div>}
        
        </div>
    )
}