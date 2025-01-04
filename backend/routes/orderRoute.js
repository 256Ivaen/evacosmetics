import express from 'express'
import { 
  placeOrder, 
  placeOrderStripe, 
  placeOrderRazorpay, 
  placeOrderPesapal,  // Add the new controller function for Pesapal
  allOrders, 
  userOrders, 
  updateStatus, 
  verifyStripe, 
  verifyRazorpay,
  verifyPesapal  // Add the new verification function for Pesapal
} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)
orderRouter.post('/pesapal', authUser, placeOrderPesapal)  // Add the Pesapal route

// User Features
orderRouter.post('/userorders', authUser, userOrders)

// Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)
orderRouter.post('/verifyPesapal', authUser, verifyPesapal)  // Add the Pesapal verification route

export default orderRouter
