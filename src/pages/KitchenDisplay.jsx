import React, { useEffect, useState } from 'react';
import OrdersList from '../components/ordersList';
import { getOrders } from '../firebase/firestore';


function KitchenDisplay() {

    const [orders, setOrders] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        getOrders(setOrders,setIsLoading)
    },[])


  return (
    <div>
      <h1>Orders List</h1>
      <OrdersList orders={orders}/>
    </div>
  );
}

export default KitchenDisplay;
