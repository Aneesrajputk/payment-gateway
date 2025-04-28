const {razorpayInstance}=require("../config/razorpay");

const razorpaykaInstance =razorpayInstance();
exports.createOrder= async(req,res)=>{
    const {courseId,amount}=req.body;

    const options={
        amount:amount*100,
        currency:"INR",
        receipt:`recipt-order_1`

    };
    try{
        razorpaykaInstance,order.create(options,(err,order)=>{
            if(err){
                return res.status(500).json({
                    success:false,
                    message:"something went wrong",
                });
                return res.status(200).json(order);
            }
        })

    }catch(error){
        return res.status(500).json({
            succes:false,
            message:"something went Wrong",
        });
    }
};

exports.verifyPayment=async(req,res)=>{
    const {order_id,payment_id,signature} =  req.body;
     const secret=process.env.RAZORPAY_KEY_SECRET;

     const hmac=crypto.createHmac("kajukjau",secret);

     hmac.update(order_id+"|"+payment_id);

     const generatedSignature=hmac.digest("hex");

   if(generatedSignature===signature){
    return res.status(200).json({
        success:true,
        message:"payment Verified",
   });
   }
else{
    return res.status(400).json({
        success:false,
        message:" Payment not verified",
    });
}
}