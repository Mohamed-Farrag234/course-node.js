const { User } = require('../moduls/users');

let adduser = async (req, res) => {
    let { firstname, lastname, username, email, password } = req.body;

    if (!firstname || !lastname || !username || !email || !password) {
        return res.json({ message: 'all fiels are required' });
    }

    try {
        // هدور علي اسم المستخدم من خلال findOne اللي هتعرضلي كل المستخدمين
        let existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.json({ message: 'user is her' });
        }
        // خد البيانات اللي هتتملي 
        let newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password, 
        });
        // احفظ البيانات اللي اخدتها
        await newUser.save();

        return res.json({ message: 'done ya basha', user: newUser });
    } catch (err) {
        console.error(err);
        return res.json({ message: 'error' });
    }
};

module.exports = { adduser };




// {
//     "firstname": "mohamed",
//     "lastname": "farrag",
//     "username": "mohamedfarrag",
//     "email": "jfwejgy",
//     "password": "12346"
// }