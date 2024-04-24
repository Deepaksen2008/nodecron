const Twilio = require("twilio");
const env=require('dotenv')
env.config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

const client = new Twilio(accountSid, authToken);

const sendSMS = async () => {
    try {
        const response = await fetch("http://localhost:5050/user");
        const data = await response.json();
        console.log(data);
        // for (let i=0; i<data.length; i++) {

        let to = '+91' + data[4].mob;
        text = 'Wish you a very Happy Birthday to ' + data[4].name;
        console.log(text, to);

        let msgOption = {
            from: '+12565781855',
            to: to,
            body: text
        }

        const message = await client.messages.create(msgOption);
        console.log(message);
    // }
    } catch (err) {
        console.error(err);
    }
}


module.exports = sendSMS
// sendSMS();
