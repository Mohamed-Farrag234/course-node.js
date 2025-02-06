const { User } = require('../moduls/users');

let deletuser = async (req, res) => {
    let { username } = req.body;

    if (!username) {
        return res.json({ message: 'All fields are required' });
    }

    try {
        // خد اسم المستخدم ده يا find اول واحد تلقاه اعمله حذف
        let existingUser = await User.findOneAndDelete({ username });
        res.json({ message: 'done ya basha' });
        // لو مالقيتش المستخدم بلغني
        if (!existingUser) {
            return res.json({ message: 'User not found' });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: 'error', error });
    }
};

module.exports = { deletuser };
