const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        service: SMPT_SERVICE = "gmail",
        auth:{
            user: SMPT_MAIL = "ajparmar@gmail.com",
            pass:SMPT_PASSWORD = "E2+EsTH5L!}1"
        },
    });

    const mailOptions = {
        from : SMPT_MAIL,
        to : options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions)


};

module.exports = sendEmail;