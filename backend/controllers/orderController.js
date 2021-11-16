import asyncHandler from 'express-async-handler';
import PlaceOrderScreen from '../../src/screens/PlaceOrderScreen.jsx';
import Order from '../models/orderModel.js';

const addOrderItems = asyncHandler(async (req, res) => {
  const { 
    orderItems, 
    shippingAddress, 
    paymentMethod, 
    itemsPrice, 
    shippingPrice, 
    taxPrice, 
    totalPrice 
  } = req.body;

  if (orderItems && orderItems.length === 0){
    res.status(404);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems, 
      user: req.user._id,
      shippingAddress, 
      paymentMethod, 
      itemsPrice, 
      shippingPrice, 
      taxPrice, 
      totalPrice 
    })

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
})

export { addOrderItems };