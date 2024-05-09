// codingan respon message data keluar
const response = (statusCode, data, message, res)=>{
    res.status(statusCode).json({
        Payload : {
            status_Code : statusCode,
            datas : data,
        },
        message:message,
        pagination:{
            prev:'',
            next:'',
            max:''
        }
    })
}

module.exports = response