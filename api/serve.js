    const express = require("express");
    const bodyParser = require('body-parser');
    const md5 = require("md5");
    const db = require("./module/db");
    const tools = require("./module/tools");
    const app = express();
    app.use(bodyParser.json());
    app.post("/adminLogin",function (req,res){
          const{adminName,passWord} = req.body;
          db.findOne("adminList",{
              adminName,
              passWord:md5(passWord)
          }).then(async(adminInfo)=>{
              if(adminInfo){
                  await db.updateOne("adminList",{
                       _id:adminInfo._id
                   },{
                        $set:{
                            loginTime:Date.now()
                        }
                   })
                  //增加一条信息
                  await db.insertOne("adminLog",{
                      adminId:adminInfo._id,
                      adminName:adminInfo.adminName,
                      createTime:Date.now()
                  })
                  //返回结果
                  res.json({
                      ok:1,
                      adminName,
                      token:tools.enToken({adminName})
                  })
              }else{
                  tools.json(res,-1,"管理员账号或密码错误")
              }
          }).catch(()=>{
            tools.json(res);
          })
    });
    app.get("/adminLog",async function(req,res){
        const adminLog = await db.find("adminLog",{
            sort:{
                createTime:-1
            }
        })
        res.json({
            ok:1,
            adminLog
        })
    })
    app.listen(80,function(){
        console.log("success");
    })