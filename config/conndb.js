const mongoose = require('mongoose')

const ConnectDB = async ()=> {
    try {
        await mongoose.connect(process.env.DATABASEURL)
    }
    catch (error){
        console.error(error)
    }
}

module.exports = {ConnectDB}