const { DataTypes } = require("sequelize")
const sequelize = require("./dbconnection")

const employee = sequelize.define("employee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    mob: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'employees',
    timestamps:false,
    createdAt: false,
    updatedAt: false
})

module.exports = employee