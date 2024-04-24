const employee = require("./employee")

const getData = async (req, res) => {
    try {
        let result = await employee.findAll()
        res.send(result)
    } catch (error) {
        res.send("Error", error)
    }
}

const postData = async (req, res) => {
    try {
        let { id, name, city, dob, mob, email } = req.body;
        console.log(id, name, city, dob, mob, email);
        let result = await employee.create({ id, name, city, dob, mob, email });
        res.send(result);
    } catch (error) {
        console.error(error);

    }
};

const deleteData = async (req, res) => {
    try {
        let id = req.query.id
        console.log(id)
        let result = await employee.destroy({
            where: {
                id: id
            }
        })
        res.send(result.json);
    } catch (error) {
        res.send("Error: " + error.message)
    }
}

const updateData = async (req, res) => {
    try {
        let id = req.query.id;
        const { name, city, dob, mob, email } = req.body;
        let result = await employee.update(
            { name, city, dob, mob, email },
            { where: { id: id } }
        );
        res.send({ data: result });
    } catch (error) {
        res.send("Error", error);
    }
}

const getEmpData = async (req, res) => {
    try {
        const id = req.query.id;
        const result = await employee.findOne({
            where: { id: id }
        });
        res.send(result)
    } catch (error) {
        res.send("Error", error)
    }
}

employee.sync({ force: false })
// .then(() => {
//     console.log('Table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });


module.exports = { getData, postData, deleteData, updateData, getEmpData };