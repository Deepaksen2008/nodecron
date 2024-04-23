const nodeCron = require("node-cron");
const sendMail = require("./nodemailer");
const sendSMS = require("./twilio");

const user = async () => {
    try {
        const response = await fetch("http://localhost:5050/user");
        const data = await response.json();
        // console.log(data);

        for (let i=0; i<data.length; i++) {
        const empdob = new Date(data[0].dob).toJSON(); 
        const currentDate = new Date().toJSON();

        // console.log(empdob);
        // console.log(currentDate);

        if (empdob === currentDate) {
            try {
                
            /* 
                *    *    *    12   *
                ^    ^    ^    ^    ^
                |    |    |    |    |
                |    |    |    |    Day of week (every day)
                |    |    |    Month (December)
                |    |    Day of month (every day)
                |    Hour (every hour)
                Minute (every minute)
                */

                nodeCron.schedule('* * * 12 *', async () => {
                    await sendMail();
                    await sendSMS(); 
                });
                
            } catch (error) {
                console.error("Error occurred while sending email or SMS:", error);
            }
        }
    }
    } catch (error) {
        console.error("Error fetching data from the database:", error);
    }
};

module.exports = user;
