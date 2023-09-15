import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import { collection, doc,  getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

 
  //       useEffect(()  => {

  //         if(user){

  //           const retrieve = async() =>{
      
  //             const ordersRef = collection(db, "users",user?.uid, "orders" );    
  //  console.log(ordersRef);
              
  //             const ordersQuerySnapshot = await  getDocs(ordersRef);
  //             console.log(ordersQuerySnapshot );
  //             // const orderedRef = query(ordersQuerySnapshot, orderBy('desc'));
  //             // const docSnap = onSnapshot(orderedRef, (snapshot) => {
  //             //   const OrdersData =snapshot.docs.map((doc) => ({
  //             //     id: doc.id,
  //             //     data: doc.data(),
  //             //   }));
               
  //             //     setOrders(OrdersData);
  //             //   })       
  //             }
  //             }
  //         else {

  //           setOrders([]);
            
  //         } 
 
  //         }, [user]);
        

  
  // Assuming you have initialized your Firebase app and have a reference to 'db'
  

    useEffect(() => {
      const fetchOrders = async () => {
        if (user) {
          const userOrdersRef = collection(db, 'users', user.uid, 'orders');
          const orderedQuery = query(userOrdersRef, orderBy('created', 'desc'));
  
          const unsubscribe = onSnapshot(orderedQuery, (snapshot) => {
            const ordersData = snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }));
            setOrders(ordersData);
          });
  
          return () => {
            // Unsubscribe from the snapshot listener when the component unmounts
            unsubscribe();
          };
        } else {
          setOrders([]);
        }
      };
  
      fetchOrders();
    }, [user]);
  
  
    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders