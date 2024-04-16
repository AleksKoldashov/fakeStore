import { useDispatch, useSelector } from "react-redux"
import { addProductBasket, decrProduct, incProduct } from "../../redux/Slice/basketSlice";
import { Space, Table, Button, } from 'antd';
import { NavLink } from "react-router-dom";

export default function Basket(params) {
    const basket = useSelector(state=>state.basket)
    const dispatch = useDispatch()
    console.log(basket.order);
    const order = basket.order
    
    const AddCounter = (product)=>{
        dispatch(addProductBasket(product))
        dispatch(incProduct(product.id))
    }
    const columns = [
        {
          title: 'Название товара',
          dataIndex: 'title',
          key: 'id',
          render: (_, record) => <NavLink to={`/market/cataloge/${record.id}`}>{record.title}</NavLink>,
        },
        {
          title: 'Количество',
          dataIndex: 'quantity',
          key: 'id',
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary" shape="circle" onClick={()=>{dispatch(decrProduct(record.id))}}>-</Button>
              <div>{record.quantity}</div>
              <Button type="primary" shape="circle" onClick={()=>{AddCounter(record)}}>+</Button>
            </Space>
          ),
        },
        {
          title: 'Стоимость',
          dataIndex: 'price',
          key: 'id',
          render: (_,record) => <div>{record.price*record.quantity}$</div>,
        },
        
      ];

    return(
    <div>
             {/* {order?.map((item)=><div>{item.title}
            <button onClick={()=>{AddCounter(item)}}>+</button> 
             {item.quantity} 
             <button onClick={()=>{dispatch(decrProduct(item.id))}}>-</button>  
             </div>)} */}
             <Table columns={columns} dataSource={order} />
    </div>
    )
}