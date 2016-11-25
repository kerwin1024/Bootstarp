module.exports = {
    cookieSecret:'cookie 秘钥存放位置',
    QQMail:{
        user:'20778083@qq.com',
        password:''
    },
    mongo:{
        //开发环境
        development:{
            connectionString:'mongodb://root:00000000@localhost:27017/admin'
        },
        //生产环境
        production:{
            connectionString:'mongodb://root:00000000@localhost:27017/admin'
        }
    }
};