const { User } = require('../moduls/users');

let login = async (req, res) => {

    try {
        // find من غير اي اضافات هتعرلي كل اللي ف الداتا بيز
        let allusers = await User.find({});
        res.json({ message: 'all users', data: allusers });

    } catch (error) {
        console.error(error);
        res.json({ message: 'error', error });
    }
};

module.exports = { login };
