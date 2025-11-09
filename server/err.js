const error=(res,status,message)=>{
return res.status(status).json({sucess:false,message,})
}
export default error;