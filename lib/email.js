var nodemailer = require('nodemailer');
module.exports = function (credentials) {
    var mailTransport = nodemailer.createTransport('SMTP',{
        //service:qq
        host:"smtp.qq.com",
        secureConnection:true,//使用SSL
        port:465,   //SMTP端口
        auth:{
            user:credentials.QQMail.user,
            pass:credentials.QQMail.password
        }
    });
    var from = '"Hello"<20778083@qq.com>';
    var errorRecipient = '20778083@qq.com';
    return{
        send:function (to,subj,body) {
            mailTransport.sendMail({
                from:from,
                to:to,
                subject:subj,
                html:body,
                generateTextFromHtml:true
            },function (err) {
                if (err) console.error('Unable to send email: '+err);
            });
        },
        emailError:function (message, filename, exception) {
            var body = '<h1>Meadowlark Travel Site Error</h1>'+'message:<br/><pre>'+message+'</pre>';
            if(exception) body += 'exception:<br><pre>'+exception+'</pre>';
            if(filename) body += 'exception:<br><pre>'+filename+'</pre>';
            mailTransport.sendMail({
                from:from,
                to:errorRecipient,
                subject:'Meadowlark Travel Site Error',
                html:body,
                generateTextFromHtml:true
            },function (err) {
                if (err) console.error('Unable to send email: '+err);
            });
        }
    };
};