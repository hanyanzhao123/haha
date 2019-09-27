module.exports = {
    devServer:{
        open:true,
        host:"127.0.0.1",
        port:8081,
        //反向代理
        proxy:{
            "^/ele":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/ele":""
                }
            }

        }

    }
}

