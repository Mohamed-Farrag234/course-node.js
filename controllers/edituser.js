const { User } = require('../moduls/users');

let edituser = async (req, res) => {
    let { username, newpassword } = req.body;

    if (!username || !newpassword) {
        return res.json({ message: 'Username and new password are required' });
    }

    try {
        // قلت ل find شوفيلي اسم المستخدم لو موجود غيريلي الباسورد
        let updatedUser = await User.findOneAndUpdate({ username }, { password: newpassword });
        // انزليلي علي الكوندشن دي find  لو مالقيتيش يا 
        if (!updatedUser) {
            return res.json({ message: 'User not found' });
        }

        res.json({ message: 'Password updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.json({ message: 'An error occurred', error });
    }
};

module.exports = { edituser };
