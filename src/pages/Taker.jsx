import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Button } from "@mui/material";
import "./Taker.css";
import { auth, db } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { Link } from "react-router-dom";

const Taker = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [ableOrder, setAbleOrder] = useState(false)

  const [orders, setOrders] =useState([])

  const ordersRef = collection(db, "orders")

  const pizzaMenu = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "Vegetarian", price: 11 },
  ];

  const handleItemClick = (item) => {
    setCurrentItem(item.name);
  };

  const handleAddToOrder = () => {
    const selectedItem = pizzaMenu.find((item) => item.name === currentItem);
    if (selectedItem) {
      setOrderItems([...orderItems, selectedItem]);
      setTotalPrice(totalPrice + selectedItem.price);
      setAbleOrder(true)
      setCurrentItem("");
    }
  };

  

  const handleSendOrder =  () => {
    
   addDoc(ordersRef, {
      order: orderItems,
      createdAt: serverTimestamp(),
      owner: auth.currentUser.email
    });

    setOrderItems([])
    setAbleOrder(false)
  }

   const logout = async () => {
        try {
            await signOut(auth)
            
        } catch (err) {
            console.error(err)
        }
    }
    

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Pizza POS</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <div className="menu">
          <Typography variant="h6">Menu</Typography>
          <List>
            {pizzaMenu.map((item) => (
              <ListItem  key={item.name} onClick={() => handleItemClick(item)}>
                <ListItemText primary={`${item.name} - $${item.price}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="order">
          <Typography variant="h6">Order</Typography>
          <List>
            {orderItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${item.name} - $${item.price}`} />
              </ListItem>
            ))}
          </List>
          <Typography variant="subtitle1">Total: ${totalPrice}</Typography>
          <Button variant="contained" onClick={handleAddToOrder} disabled={!currentItem}>
            Add to Order
          </Button>
          <Button variant="contained" color="success" onClick={handleSendOrder} disabled={!ableOrder}>
            Send Order
          </Button>
        </div>
      </Container>
      <div>{ orders.map((order) => <h1>{order.email}</h1>)}</div> 
      <Link to={'/kitchen'}>
        <Button>Go to KDS</Button>
      </Link>
      <Button onClick={logout}>Log Out</Button>
    </div>
  );
};

export default Taker;
