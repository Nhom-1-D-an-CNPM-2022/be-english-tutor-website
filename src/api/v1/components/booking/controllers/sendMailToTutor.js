
import nodemailer from 'nodemailer';

const sendMailToTuTor = (req, res) => {
    const body = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.email,
              pass: process.env.pass,
            }
          });
            const mailOptions = {
              from: process.env.email,
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
                        <a href='https://localhost:5000'>
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