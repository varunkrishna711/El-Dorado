var express = require('express');
var router = express.Router();

const Razorpay = require('razorpay');
const request = require('request');

const keys = require('./keys');
const dotenv = require('dotenv');
dotenv.config();

const razorInstance = new Razorpay({
  key_id : process.env.key_id,
  key_secret : process.env.key_secret
});

router.get("/book",(req,res)=>{
  try{
    const options ={
      amount : 10*100,
      currency : "INR",
      receipt: "receipt#1",
      payment_capture: 0, //1

    };
    razorInstance.orders.create(options,async function(err,order){
      if(err){
        return res.status(500).json({
          message: "Something error!s"
        })
      }
      return res.status(200).json(order)
    });
  }
  catch(err){
    return res.status(500).json({
      message: "Something error!s"
    })
  }
});

router.post("/capture/:paymentId",(req,res)=>{
  try{
    return request(
      {
        method : "POST",
        url : `https://${keys.razorIdkey}:${keys.razorIdSecret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form:{
          amount : 10 *100,
          currency: "INR"
        },
      },
      async function(err,response,body){
        if(err){
          return res.status(500).json({
            message: "Something error!s"
          })
        }
        return res.status(200).json(body)
      }
    )
  }
  catch(err){
    return res.status(500).json({
      message: err.message
    })
  }
})

module.exports = router;