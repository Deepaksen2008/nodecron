const nodemailer = require("nodemailer");
const env =require('dotenv')
env.config()
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});
console.log(process.env.USER);

const sendMail = async () => {
    try {
        const response = await fetch("http://localhost:5050/user");
        const data = await response.json();
        console.log(data);

        // for (let i = 0; i < data.length; i++) {
        let to = data[4].email;
        let subject = `<h3>🎉 Happy Birthday ${data[4].name} 🎉</h3>`;
        let text = `🎂 Many many happy returns of the day, ${data[4].name}. May all your wishes come true. Best of luck for your future. 🥳`;

        let htmlContent = `
    <div style="border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <div style="background-color: #f0f0f0; padding: 10px;">
            <h2 style="font-size: 22px; font-weight: bold; margin: 0;">${subject}</h2>
        </div>
        <div style="padding: 20px;">
            <p>${text}</p>
            <br>
            <p>Regards,</p>
            <p>${data[4].name} tnpLab</p>
        </div>
    </div>
`;



        console.log(to, subject, text);

        let options = {
            from: "deepakkumarsen2008@gmail.com",
            to: to,
            subject: 'Happy Birthday!',
            html: htmlContent
        };

        const info = await transporter.sendMail(options);
        console.log("Message sent: %s", info.messageId);
        // }
    } catch (error) {
        console.error("Error occurred while sending email:", error);
    }
};

module.exports = sendMail;
// sendMail()