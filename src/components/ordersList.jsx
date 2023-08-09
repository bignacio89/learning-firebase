import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const OrdersList = ({ orders }) => {
  

  return (
    <Container maxWidth="md" className="container">
      {orders.map((order, index) => (
        <Paper key={index} className="paper" >
          <Typography variant="h6">Order {index + 1}</Typography>
          {order.order.map((item, itemIndex) => (
            <Typography key={itemIndex} variant="body1">
              {item.name}
            </Typography>
          ))}
        </Paper>
      ))}
    </Container>
  );
};

export default OrdersList;
