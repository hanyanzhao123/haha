const md5 = require("md5");
const jwt = require("jwt-simple");
const key = "*&)(*&(*&(*&";
module.exports.getNowTime = function() {
    const data = new Date();
    return data.getFullYear()+"-"+
        (data.getMonth()+1).toString().padStart(2,"0")+"-"+
        (data.getDate()).toString().padStart(2,"0")+" "+
        (data.getHours()).toString().padStart(2,"0")+":"+
        (data.getMinutes()).toString().padStart(2,"0")+":"+
        (data.getSeconds()).toString().padStart(2,"0");
}
// res响应对象
module.exports.json = function (res,ok=-1,msg="网络连接错误") {
    res.json({
        ok,
        msg
    })
}
module.exports.md5 = function (context) {
    const str = "ele.com(*&^(*&^(*&";
    return md5(context+str);
}

// 解密 token
module.exports.deToken =function (token) {
    try{
        const info = jwt.decode(token,key);
        if(info.lastTime > Date.now()){
            return {
                ok:2,
                msg:"正常"
            }
        }else{
            return {
                ok:3,
                msg:"toke过期"
            }
        }
    }catch (err){
        return {
            ok:1,// 异常
            msg:"token异常"
        }
    }
}
// 生成token
module.exports.enToken = function (payload) {
    return jwt.encode({
        ...payload,
        ...{
            lastTime:Date.now()+10*1000*60
        }
    },key)
}