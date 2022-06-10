
import nodemailer from 'nodemailer';

const sendMailToTuTor = (req, res) => {
    const body = req.body;
    const myEmail = process.env.EMAIL;
    const myPassword = process.env.PASSWORD;
    const apiUrl = process.env.SERVER_URL;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: myEmail,
              pass: myPassword,
            }
          });
            const mailOptions = {
              from: myEmail,
              to: body.student.email,
              subject: 'Đăng ký lớp học',
              html:`
              <!DOCTYPE html>
                <html>
                <head>
                    <style type="text/css">
                    </style>
                </head>
                <body>
                    <div>
                        <p>Hi!</p>
                        <p> Lớp học của bạn có một đăng ký mới</p>
                        <br>
                        <a href='${apiUrl}'>
                            <button>xem</button>
                        </a>
                    </div>
                </body>
        
                </html>
                `
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  res.json(error)
                } 
              });  
            res.status(200).send(data);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default sendMailToTuTor;